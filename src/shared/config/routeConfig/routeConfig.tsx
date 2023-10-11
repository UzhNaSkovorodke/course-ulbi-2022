import {AboutPage} from 'pages/AboutPage'
import {MainPage} from 'pages/MainPage'
import {RouteProps} from 'react-router-dom'

export enum AppRotes { // типы маршрутов
  MAIN = 'main',
  ABOUT = 'about'
}

export const RoutePath: Record<AppRotes, string> = {
  // это url маршрутов
  [AppRotes.MAIN]: '/',
  [AppRotes.ABOUT]: '/about'
}

export const routeConfig: Record<AppRotes, RouteProps> = {
  // это конфиг маршрутов который содержит путь и элементы маршрутов
  [AppRotes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRotes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />
  }
}
