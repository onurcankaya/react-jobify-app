export type RegisterUserResponse = {
  user: {
    email: string
    name: string
    lastName: string
    location: string
    token: string
  }
}
export type RegisterUserPayload = {
  name: string
  email: string
  password: string
}

export type LoginUserResponse = {
  user: {
    email: string
    name: string
    lastName: string
    location: string
    token: string
  }
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
