import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { Suspense } from 'react'
import AppRouter from './providers/router/ui/AppRouter.tsx'

const App = () => {
  const { theme } = useTheme()

  //TODO сделать loader при переходе на другую страницу
  return (
    <div className={classNames('app', [theme])} id={'app'}>
      <Suspense fallback="...">
        <AppRouter />
      </Suspense>
    </div>
  )
}

export default App
