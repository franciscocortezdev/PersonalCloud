import "dotenv/config"
import { Sequelize } from 'sequelize';

const DB_URI = process.env.DB_URI

const sequelize = new Sequelize(`${DB_URI}`) 

export const conectarDB = async ()=>{
  
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
   


