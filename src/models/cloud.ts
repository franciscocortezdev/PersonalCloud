import { DataTypes } from "sequelize"
import dbConexion from '../config/dbConexion';


export const CloudModel = dbConexion.sequelize.define("clouds", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  path: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
})
