import express, { Application } from "express"
import "dotenv/config"
import cors from "cors"
import { IndexRoutes } from "./routes"

export class AppServer {
  PORT = process.env.PORT
  app: Application = express()
  indexRoutes: IndexRoutes

  constructor(routes: IndexRoutes){
    this.indexRoutes = routes
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

    this.app.use("/", this.indexRoutes.getRoutes())
  }
}