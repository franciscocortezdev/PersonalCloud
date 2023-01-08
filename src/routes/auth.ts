import { Router } from "express"

export class auth {
  router = Router()

  getRoutes() {
    this.router.get("/register", (req, res) => {
      res.send("Register")
    })
    this.router.get("/login", (req, res) => {
      res.send("Login")
    })

    return this.router
  }
}
