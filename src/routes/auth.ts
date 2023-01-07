import { Router } from "express"


export class auth {
  router = Router()

  static getRoute(){
    const Auth = new auth()

    Auth.router.get("/register", (req, res)=>{
      //console.log('register')
      res.send('Register')
    })
    Auth.router.get("/login", (req, res)=>{
      res.send('Login')
    })

    return Auth.router
  }
}