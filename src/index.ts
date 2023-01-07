import express, { Application, Request, Response, Router } from "express"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"

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
    this.app.get("/", async (req: Request, res: Response) => {
      res.status(200).send("<H1>HELLO WOLRD</H1>")
    })
  }
}


AppServer.start()
