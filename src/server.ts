import express, { Application } from "express"
import "dotenv/config"
import cors from "cors"
import { routeInterface } from "./interfaces/routeInterface"


export class AppServer {
  PORT = process.env.PORT
  app: Application = express()
  authRoutes: routeInterface

  constructor(authRoutes: routeInterface){
    this.authRoutes = authRoutes
  }

  config() {
    this.app.use(express.json())
    this.app.use(cors())
    this.routes()
  }

  start() {
    this.config()
    this.app.listen(this.PORT, () => {
      console.log("Server started")
    })
  }

  private routes() {
    this.app.use("/auth", this.authRoutes.getRoutes())
    
  }
}