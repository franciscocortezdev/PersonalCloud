import { Sequelize } from "sequelize"


class dbConexion {
  sequelize: Sequelize

  constructor(){
    this.sequelize = new Sequelize(`${process.env.DB_URI}`)
  }

  async connection() {
    try {
      await this.sequelize.authenticate()
      console.log("Connection has been established successfully.")
    } catch (error) {
      console.error("Unable to connect to the database:", error)
    }
  }
}

export default new dbConexion()
