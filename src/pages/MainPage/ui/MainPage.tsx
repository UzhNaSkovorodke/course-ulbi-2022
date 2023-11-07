import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '@entities/Counter/Counter.tsx'
import { StateSchema } from '@app/providers/StoreProvider/config/StateSchema.ts'

const MainPage = () => {
  const count = useSelector((state: StateSchema) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <div>
          <button aria-label="Increment value" onClick={() => dispatch(counterActions.increment())}>
            Increment
          </button>
          <span>{count}</span>
          <button aria-label="Decrement value" onClick={() => dispatch(counterActions.decrement())}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  )
}

export default MainPage
