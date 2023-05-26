import {classNames} from 'helpers/ClassNames/classNames'
import {AboutPage} from 'pages/AboutPage'
import {MainPage} from 'pages/MainPage'
import {Suspense} from 'react'
import {Link, Route, Routes} from 'react-router-dom'

import {useTheme} from './providers/ThemeProvider'

import 'styles/index.scss'

const App = () => {
  const {theme, toogleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toogleTheme}>TOGGLE THEME</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage />} />
          <Route path={'/'} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}
export default App
