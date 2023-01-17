import {Sequelize,  Model, DataTypes } from 'sequelize';


const sequelize = new Sequelize();


class UserModel extends Model{
  
  declare id: number;

  declare nombre: string
  declare apellido: string
  declare email: string
  declare pass: string
  declare directory: string

  declare createdAt: Date;
  declare updatedAt: Date;


}
 

UserModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pass: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  directory: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  }
},
  {
    tableName: 'users',
    sequelize, 
  })


 