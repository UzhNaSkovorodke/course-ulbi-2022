import {Suspense} from 'react'
import {Link, Route, Routes} from 'react-router-dom'

import {useTheme} from './Theme/useTheme'
import {classNames} from './helpers/ClassNames/classNames'
import {AboutPageAsync} from './pages/AboutPage/AboutPage.async'
import {MainPageAsync} from './pages/MainPage/MainPage.async'
import './styles/index.scss'

const App = () => {
  const {theme, toogleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toogleTheme}>TOGGLE THEME</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />} />
          <Route path={'/'} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}
export default App
