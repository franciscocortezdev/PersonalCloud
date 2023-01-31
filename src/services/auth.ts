import { Iuser } from "../interfaces/authInterface"
import { UserModel } from "../models/user"

class authService {
  FindUser = async (email: string): Promise<Iuser> => {
    const responseItem = await UserModel.findOne({ where: { email } })
    return responseItem as unknown as Iuser
  }

  CreateUser = async (user: Iuser) => {
    const responseInsert = await UserModel.create({
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        cloudPath: user.cloudPath
     })
    return responseInsert
  }
}

export default new authService()
