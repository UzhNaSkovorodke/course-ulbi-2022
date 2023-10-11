import {classNames} from 'helpers/ClassNames/classNames'
import {Navbar} from 'widgets/Navbar/ui/Navbar'

import {useTheme} from './providers/ThemeProvider'
import {AppRouter} from './providers/router/index'

import 'styles/index.scss'
import {Sidebar} from 'widgets/Sidebar'

const App = () => {
  const {theme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  )
}
export default App
