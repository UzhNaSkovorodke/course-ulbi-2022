import { useSelector } from 'react-redux'
import { RootState } from '@app/providers/StoreProvider/config/store.ts'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { setUsername } from '@entities/Auth/Auth.tsx'

export const useChangeForm = () => {
  const username = useSelector((state: RootState) => state.auth.username)
  const password = useSelector((state: RootState) => state.auth.password)
  const email = useSelector((state: RootState) => state.auth.email)
  const dispatch = useDispatch()

  const usernameChangeHandler = useCallback(
    (value: string) => {
      dispatch(setUsername(value))
    },
    [dispatch]
  )

  return {
    username,
    password,
    email,
    usernameChangeHandler,
  }
}
