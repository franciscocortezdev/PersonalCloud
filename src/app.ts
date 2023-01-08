import { IndexRoutes } from "./routes"
import { AppServer } from "./server"

const indexRoutes: IndexRoutes = new IndexRoutes() 
const appServer: AppServer = new AppServer(indexRoutes)

appServer.start()
