import { Navbar } from '../Navbar'
import { Outlet } from 'react-router'
import { Sidebar } from '../Sidebar'

export const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="content-page">
        <Sidebar />
        <Outlet />
      </main>

      <footer />
    </>
  )
}
