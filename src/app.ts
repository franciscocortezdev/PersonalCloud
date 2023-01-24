import "dotenv/config"
import { AppServer } from "./server"

const appServer: AppServer = new AppServer()
appServer.listen()

