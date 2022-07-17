import { User } from '../../types'

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
