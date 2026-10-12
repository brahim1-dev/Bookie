import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import BookForm from "../components/BookForm"



const AddBook = () => {
  return (
    <div>
      <div className="max-w-2xl mx-auto animate-in slide-in-from-bottom-4 duration-500">
        <div className="mb-6">
          <Link className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-brand-600 transition-colors" to="/">
          <ArrowLeft size={16} className="mr-1"/> Back to List</Link>
        </div>
        <div className="bg-white p-8 rounded 2xl shadow-md border border-gray-100">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Add book</h1>
          <BookForm/>
        </div>
      </div>
    </div>
  )
}

export default AddBook