import { Router } from "express"
import { authController } from "../controllers/auth"

export class auth {
  router = Router()
  authCtl: authController

  constructor(authController: authController) {
    this.authCtl = authController

  }

  getRoutes() {

    const authctl: authController = new authController()

    this.router.get("/login", authctl.loginCtl)

    this.router.get("/register", authctl.registerCtl)

    return this.router
  }
}
