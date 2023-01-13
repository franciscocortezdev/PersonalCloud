import dotenv from "dotenv"
dotenv.config()
import { Secret, sign, verify } from "jsonwebtoken"
import { Icredentials } from "../interfaces/authInterface"

class handleJWT {
  secretJWT = process.env.JWT_SECRET

  generateToken = (credentials: Icredentials) => {
    const jwt = sign(credentials, this.secretJWT as Secret)

    return jwt
  }

  compareToken = (token: string) => {
    const response = verify(token, this.secretJWT as Secret)
    return response
  }
}

export default new handleJWT()