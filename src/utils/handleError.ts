import { Response } from "express"


class handleError {

  handleError = ( res: Response, errorSend: string | object, code: number = 500 ) => {
    res.status(code)
    res.send({ error: errorSend })
  }
}

export default new handleError()