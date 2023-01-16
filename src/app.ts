import { authController } from "./controllers/auth"
import { routeInterface } from "./interfaces/routeInterface"
import { auth } from "./routes/auth"
import { AppServer } from "./server"

const authCtl: authController = new authController()
const authRoute: routeInterface = new auth(authCtl)


const appServer: AppServer = new AppServer(authRoute)
appServer.start()


