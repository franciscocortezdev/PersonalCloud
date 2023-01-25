import { DataTypes } from 'sequelize';
import dbConexion from '../config/dbConexion';



export const UserModel = dbConexion.sequelize.define('users',{
    id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  apellido: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  pass: {
    type: DataTypes.STRING,
  },
  directory: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  }
})


