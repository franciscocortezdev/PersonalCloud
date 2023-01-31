import { Router } from "express"

class auth {
  router = Router()

  public Routes() {
    this.router.get("/content/:path?",(req, res)=>{
      res.send({menssage: "Content"})
    })

    this.router.get("/upload/:path",(req, res)=>{
      res.send({menssage: "Download"})
    })

    this.router.post('/download/:path?', (req, res)=>{
      res.send({menssage: "Upload"})
    })

    this.router.post('/dir/:path?', (req, res)=>{
      res.send({menssage: "Dir"})
    })

    return this.router
  }
}

export default new auth()
