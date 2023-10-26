import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { Layout } from '../../../../widgets/Layout/Layout.tsx'

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={'...Loading....'}>
              <div className="page-wrapper">{element}</div>
            </Suspense>
          }
        />
      ))}
    </Route>
  </Routes>
)

export default AppRouter
