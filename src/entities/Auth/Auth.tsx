import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AuthState } from '@app/providers/StoreProvider/config/StateSchema.ts'

const initialState: AuthState = {
  username: '',
  password: '',
  email: '',
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    clearUsername: (state) => {
      state.username = ''
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
    clearPassword: (state) => {
      state.password = ''
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    clearEmail: (state) => {
      state.email = ''
    },
  },
})

// eslint-disable-next-line react-refresh/only-export-components
export const {
  setUsername,
  //, setEmail, setPassword, clearUsername, clearPassword, clearEmail
} = AuthSlice.actions
// export const { reducer: authReducers } = AuthSlice
export default AuthSlice.reducer
