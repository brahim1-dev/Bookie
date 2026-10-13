import { BookOpen, PlusCircle } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

const NavBar = () => {
  const location = useLocation()

  return (
    <div className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-brand-100 text-brand-600 p-2 rounded-lg group-hover:text-white transition-colors duration-200">
                <BookOpen size={24}/>
              </div>
              <span className="font-bold text-xl text-gray-900 tracking-tight">Bookie</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
              <Link to="/add-book" className={`btn ${location.pathname==="/add-book"?'btn-primary':'btn-secondary'} inline-flex gap-2`}>
                <PlusCircle  size={18}/>
                <span className="hidden sm:inline">Add Book</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar