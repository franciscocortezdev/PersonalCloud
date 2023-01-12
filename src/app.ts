import { authController } from "./controllers/auth"
import { routeInterface } from "./interfaces/routeInterface"
import { auth } from "./routes/auth"
import { AppServer } from "./server"
import { DBConnection } from "./config/dbConexion"

const authCtl: authController = new authController()
const authRoute: routeInterface = new auth(authCtl)


const DBConnect: DBConnection = new DBConnection()
const appServer: AppServer = new AppServer(authRoute)
appServer.start()
DBConnect.connect()