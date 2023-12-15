import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AuthState } from '@app/providers/StoreProvider/config/StateSchema.ts'
import getCookieValue from '@shared/lib/getCookie/getCookie.ts'

const initialState: AuthState = {
  accessToken: getCookieValue('access') ?? '',
  refreshToken: getCookieValue('refresh') ?? '',
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload
    },
    refresh: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload
    },
  },
})

export default AuthSlice.reducer
