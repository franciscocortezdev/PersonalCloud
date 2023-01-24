import express, { Application } from "express"
import cors from "cors"
import IndexRoutes from './routes/index'
import dbConexion from "./config/dbConexion"

export class AppServer {
  private PORT: string
  private app: Application

  constructor() {
    this.PORT = process.env.PORT || "3001"
    this.app = express()
  }

  config() {
    this.app.use(express.json())
    this.app.use(cors())
    this.routes()
    dbConexion.connection()
  }

  async listen() {
    this.config()
    this.app.listen(this.PORT, () => {
      console.log("Server started on port: " + this.PORT)
    })

    
  }

  private routes() {
    this.app.use("/", IndexRoutes.getRoutes())
  }
}
