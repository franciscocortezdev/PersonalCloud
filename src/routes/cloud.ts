import { Router } from "express"


export class cloud {
  router = Router()

  static getRoute(){

    const Cloud = new cloud()

    Cloud.router.get("/", (req, res)=>{
      res.send('Get Clouds')
    })


    return Cloud.router
  }
}