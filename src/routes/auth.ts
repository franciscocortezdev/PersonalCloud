import { Router } from "express"
import authCtl from "../controllers/auth"
class auth {
  router = Router()

  public Routes() {
    this.router.post("/login", authCtl.loginCtl)

    this.router.post("/register", authCtl.registerCtl)

    return this.router
  }
}

export default new auth()
