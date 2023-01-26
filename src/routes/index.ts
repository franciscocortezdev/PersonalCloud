import { Router } from "express"
import { readdirSync } from "fs"

class IndexRoutes {
  router = Router()

  removeExtension(file: string) {
    const fileClean = file.split(".").shift()
    return fileClean
  }

  getFilesRoutes(dir: string) {
    const files = readdirSync(dir)
      .filter((fileName) => fileName !== "index.ts")
      .map((filesRoute) => this.removeExtension(filesRoute))

    return files
  }

  getRoutes() {
    const filesRoutes = this.getFilesRoutes(__dirname)

    filesRoutes.forEach((file) => {
      import(`./${file}`).then((moduleRoute) => {
        this.router.use(`/${file}`, moduleRoute.default.Routes())
      })
    })

    return this.router
  }
}

export default new IndexRoutes()
