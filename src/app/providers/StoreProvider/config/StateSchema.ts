export interface CounterState {
  value: number
}
export interface UserState {
  username: string
  password: string
  email: string
}

export interface AuthState {
  accessToken: string
  refreshToken: string
}

export interface StateSchema {
  counter: CounterState
  auth: AuthState
  user: UserState
}
