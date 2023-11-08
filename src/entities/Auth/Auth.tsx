import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  userName: string
  password: string
}

const initialState: AuthState = {
  userName: '',
  password: '',
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload
    },
    clearUserName: (state) => {
      state.userName = ''
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
    clearPassword: (state) => {
      state.password = ''
    },
  },
})

// export const { actions: authActions } = AuthSlice
// export const { reducer: authReducers } = AuthSlice
export default AuthSlice.reducer
