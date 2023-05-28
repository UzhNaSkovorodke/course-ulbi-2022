import {classNames} from 'helpers/ClassNames/classNames'
import {Navbar} from 'widgets/Navbar/ui/Navbar'

import {useTheme} from './providers/ThemeProvider'
import AppRouter from './providers/router/ui/AppRouter'

import 'styles/index.scss'

const App = () => {
  const {theme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  )
}
export default App
