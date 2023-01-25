export interface Icredentials {
  email: string
  pass: string
}

export interface Iuser extends Icredentials{
  nombre: string
  apellido: string,
}