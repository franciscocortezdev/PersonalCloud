import { hash, compare } from "bcrypt"

export class handleBcrypt {
  static encrypt = (password: string): Promise<string> => {
    return hash(password, 6)
  }

  static decrypt = (password: string, hash: string): Promise<boolean> => {
    return compare(password, hash)
  }
}
