import { Router } from "express"
import { readdirSync } from "fs"

export class IndexRoutes{

  router = Router()
  PATH_ROUTER = `${__dirname}`
  filesRoutes = readdirSync(this.PATH_ROUTER)
  .filter((fileName) => fileName !== "index.ts")
  .map((filesRoute) => this.removeExtension(filesRoute))


  removeExtension(file: string){
    const fileClean = file.split(".").shift()
    return fileClean
  }

    
 
    getRoutes (){

    this.filesRoutes.forEach(file=>{
      import(`./${file}`).then(moduleRoute=>{
        //console.log('console', moduleRoute[`${file}`].getRoute())
        this.router.use(`/${file}`, moduleRoute[`${file}`].getRoute())
      })
    })

    return this.router
    
  }
}
