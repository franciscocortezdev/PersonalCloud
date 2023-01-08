import { IndexRoutes } from "./routes"
import { AppServer } from "./server"
import { authController } from "./controllers/auth"
import { auth } from "./routes/auth"

const AuthController : authController = new authController()

//const authRoute: auth = new auth(AuthController)
const indexRoutes: IndexRoutes = new IndexRoutes() 
const appServer: AppServer = new AppServer(indexRoutes)

appServer.start()
