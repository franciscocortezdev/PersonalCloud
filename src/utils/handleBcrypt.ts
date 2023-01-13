import { hash, compare } from "bcrypt"

class hanldeBcrypt {
  encrypt = (password: string): Promise<string> => {
    return hash(password, 6)
  }

  decrypt = (password: string, hash: string): Promise<boolean> => {
    return compare(password, hash)
  }
}

export default new hanldeBcrypt()