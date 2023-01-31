import { Request, Response } from "express"
import handleError from "../utils/handleError"
import handleJWT from "../utils/handleJWT"
import { handleBcrypt } from "../utils/handleBcrypt"
import authService from "../services/auth"

class authController {
  loginCtl = async (req: Request, res: Response) => {
    const { body } = req

    try {
      const response = await authService.FindUser(body.email)
      if (!response) return handleError.sendError(res, "ERROR_USER_NOT_FOUND")

      const passDecrypt = await handleBcrypt.decrypt(
        body.password,
        response.password
      )
      if (!passDecrypt) return handleError.sendError(res, "ERROR_PASSWORD")

      const toke = handleJWT.generateToken({
        email: response.email,
        password: response.password,
      })

      const user = {
        user: response.name,
        email: response.email,
      }
      res.send({
        token: toke,
        data: user,
      })
    } catch (error) {
      handleError.sendError(res, "ERROR_LOGIN")
    }
  }

  registerCtl = async (req: Request, res: Response) => {
    const { body } = req

    try {
      const userExist = await authService.FindUser(body.email)
      if (userExist)
        return handleError.sendError(res, "ERROR_USER_ALREADY_EXISTS")

      const passEncrypt = await handleBcrypt.encrypt(body.password)

      const response = await authService.CreateUser({
        ...body,
        password: passEncrypt,
      })
      res.send({ data: response })
    } catch (error) {

      handleError.sendError(res, "ERROR_REGISTER_USER")
    }
  }
}

export default new authController()
