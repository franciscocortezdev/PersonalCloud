import "dotenv/config"
import { Sequelize } from "sequelize"

export class DBConnection {
  DB_URI: string
  sequelize: Sequelize
  constructor() {
    this.DB_URI = process.env.DB_URI!
    this.sequelize = new Sequelize(this.DB_URI)
  }

  async connect() {
    try {
      await this.sequelize.authenticate()
      console.log("Connection has been established successfully.")
    } catch (error) {
      console.error("Unable to connect to the database:", error)
    }
  }
}
