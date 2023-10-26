import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { Suspense } from 'react'
import AppRouter from './providers/router/ui/AppRouter.tsx'

const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <AppRouter />
      </Suspense>
    </div>
  )
}

export default App
