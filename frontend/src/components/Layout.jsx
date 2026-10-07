import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar/>
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet/>
      </main>
        <footer className="bg-white border-t border-gray-100 mt-auto py-6">
          <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Bookie System. All Rights Reserved
          </div>
        </footer>
    </div>
  )
}

export default Layout