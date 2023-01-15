import { Iuser } from "../interfaces/authInterface"
import { UserModel } from "../models/user"

class auth{
  userLogin = async (email: string) => {
    const responseItem = await UserModel.findOne({  }) 
    return responseItem
  }
  
  userRegister = async (user: Iuser) => {
    const responseInsert = await UserModel.create()
   responseInsert.set("password", undefined)
    return responseInsert
  }
}

export default new auth()