import { BookText, Download, Edit, Trash2 } from "lucide-react"
import { Link } from "react-router-dom"

const BookCard = ({book}) => {
  return (
    <div className="card flex flex-col group relative bg-white">
      {/* Cover Image */}
      <div className="h-48 w-full bg-gray-100 flex-shrink-0 overflow-hidden relative">
        {
          book.coverImage?(
          <img className="w-full h-full object-contain bg-white p-2 transition-transform duration-500 group-hover:scale-105" src={book.coverImage} alt="Cover of book"/>):(
          <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 bg-brand-50/50" >
            <span>No Cover Image Available</span>
          </div>
        )
        }
      </div>
      <div className="p-5 flex-grow">
        <div className="flex justify-between items-start mb-4 gap-4 ">
          <h3 className="text-xl font-semibold text-gray-900 leading-tight line-clamp-2">{book.title}</h3>
          <div className="bg-brand-50 text-brand-700 px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
            ${Number(book.price).toFixed(2)}
          </div>
        </div>
        <p className="text-gray-500 font-medium mb-3 text-sm">By<span>{book.author}</span></p>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">By{book.description}</p>
      </div>
      <div className="px-5 py-4 bg-gray-50/50 border-t border-gray-100 flex items-center justify-between gap-2">
        <div className="flex items-center gap-4">
          <Link to={`/book/${book._id}`} className="text-brand-600 hover:text-brand-700 text-sm font-medium flex items-center gap-1 transition-colors">
          <BookText size={16}/>
          Details
          </Link>
          {
            book.downloadLink &&( <a className="text-gray-600 hover:text-brand-600 text-sm font-medium flex items-center gap-1 transition-colors" href={book.downloadLink} target="_blank" rel="noopener noreferrer"> 
              <Download size={16}/>Download</a>)
          }
        </div>
        <div className="flex items-center gap-2">
          <Link className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
            <Edit size={18}></Edit>
          </Link>
          <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
            <Trash2 size={18}></Trash2>
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookCard