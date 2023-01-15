export interface Icredentials {
  email: string
  password: string
}

export interface Iuser extends Icredentials{
  nombre: string
  apellido: string,
  directory: string
}