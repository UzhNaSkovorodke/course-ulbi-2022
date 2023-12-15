import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserState } from '@app/providers/StoreProvider/config/StateSchema.ts'

const initialState: UserState = {
  username: '',
  password: '',
  email: '',
}

export const UserSlice = createSlice({
  name: 'user',
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

export default UserSlice.reducer
