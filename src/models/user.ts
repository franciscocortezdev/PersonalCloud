import { DataTypes } from 'sequelize';
import dbConexion from '../config/dbConexion';



export const UserModel = dbConexion.sequelize.define('users',{
  id: {
  type: DataTypes.INTEGER,
  autoIncrement: true,
  primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
  },
  cloudPath:{
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  }
})


