import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { StateSchema } from '@app/providers/StoreProvider/config/StateSchema.ts'
import { AnyAction } from 'redux'
import { ThunkMiddleware } from 'redux-thunk'
import { Provider } from 'react-redux'

interface StoreProvider {
  store: ToolkitStore<StateSchema, AnyAction, [ThunkMiddleware<StateSchema, AnyAction>]>
  children: React.ReactNode
}

export const StoreProvider = ({ store, children }: StoreProvider) => {
  return <Provider store={store}>{children}</Provider>
}
