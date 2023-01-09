import { Request, Response } from "express"

export class authController {
  registerCtl(req: Request, res: Response) {
    res.send("Register")
  }

  loginCtl(req: Request, res: Response) {
    res.send("login")
  }
}
