import express, { Application, Request, Response, Router } from "express"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import { IndexRoutes } from "./routes"


class AppServer {
  PORT = process.env.PORT
  app: Application

  constructor() {
    this.app = express()
  }

  config() {
    this.app.use(express.json())
    this.app.use(cors())
    this.routes()
  }

  static start() {
    const appServer = new AppServer()
    appServer.config()
    appServer.app.listen(appServer.PORT, () => {
      console.log("Server started")
    })
  }

  private routes() {
    const indexRoutes = new IndexRoutes()
    console.log('indexRoutes', indexRoutes.getRoutes())

    this.app.use("/", indexRoutes.getRoutes())
  }
}

AppServer.start()
