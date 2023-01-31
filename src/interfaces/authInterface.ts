export interface Icredentials {
  email: string
  password: string
}

export interface Iuser extends Icredentials{
  name: string
  lastName: string,
  cloudPath: string
}