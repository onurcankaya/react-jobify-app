export type User = {
  name: string
  lastName: string
  email: string
  location: string
  token?: string
}

export type RegisterUserResponse = {
  user: User
}
export type RegisterUserPayload = {
  name: string
  email: string
  password: string
}
export type LoginUserResponse = {
  user: User
}
export type LoginUserPayload = {
  email: string
  password: string
}
export type ErrorResponse = {
  response: {
    data: {
      msg: string
    }
  }
}
export type UpdateUserResponse = {
  user: User
}
export type UpdateUserPayload = {
  user: User
}
