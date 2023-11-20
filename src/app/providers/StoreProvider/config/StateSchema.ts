export interface CounterState {
  value: number
}
export interface AuthState {
  username: string
  password: string
  email: string
}

export interface StateSchema {
  counter: CounterState
  auth: AuthState
}
