import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchBook } from "../redux/API/bookSlice"
import { Link, useNavigate, useParams } from "react-router-dom"
import { ArrowLeft, Calendar, DollarSign, Download, Edit2 , Loader2, User} from "lucide-react"
import { clearCurrentBook } from "../redux/API/bookSlice"



const BookDetails = () => {
  const {id} = useParams();
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const {currentBook, isLoading, isError} = useSelector((state)=>state.book)
  useEffect(()=>{
  if(id){
  dispatch(fetchBook(id))
}
  return () => {
    dispatch(clearCurrentBook())
  }
  },[id, dispatch])

  useEffect(()=>{
    if(isError && !currentBook){
      navigate('/')
    }
  }, [isError, currentBook, navigate])

  if(isLoading || !currentBook){
    return <div className="flex flex-col gap-10 justify-center items-center p-4">
      <Loader2 className="animate-spin text-brand-600 " size={40}/>
      <p className="text-gray-500 font-medium">Loading...</p>
  </div> 
}

return (
<div className="max-w-3xl mx-auto animate-in fade-in duration-500">
  <div className="mb-6 flex justify-between items-center">
    <Link to="/"
      className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-brand-600 transition-colors">
    <ArrowLeft size={16} />
    Back to List
    </Link>
    <Link className="btn btn-secondary inline-flex gap-2" to={`/edit/${currentBook._id}`}> <Edit2 size={16} />
    Edit Book
    </Link>
  </div>
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
    <div className="p-8 md:p-10 flex flex-col md:flex-row gap-10">
      {/* Cover Image */}
      {
      currentBook.coverImage && (
      <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0">
        <img className="w-full h-auto rounded-xl shadow-sm object-contain bg-white p-2 border border-gray-100"
          src={currentBook.coverImage} alt={`Cover of ${currentBook.title}`} />
      </div>
      )
      }
      {/* Book Details */}
      <div className="flex-grow ">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">

          <div className="">
            <h1 className="text-3xl font-bold text-gray-900 mb-2 loading-tight">{currentBook.title}</h1>
            <div className="flex items-center gap-4 text-gray-500 mt-4 flex-wrap">
              <div className="flex items-center gap-1.5">
                <User size={18} className="text-gray-400"></User>
                <span className="font-medium text-gray-700">
                  {currentBook.author}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar size={18} className="text-gray-400" />
                <span className="">Added {
                  new Date(currentBook.createdAt).toLocaleDateString('en-US', {year:'numeric', month:'long',
                  day:'numeric'})
                  }
                </span>
              </div>
            </div>
          </div>

          <div
            className="bg-brand-50 border border-brand-100 text-brand-700 px-6 py-3 rounded-xl flex flex-col items-center justify-center min-w-[120px]">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-600/80 mb-1">Price</span>
            <div className="flex items-center font-bold text-2xl">
              <DollarSign size={20} className="text-brand-500 -mr-0.5" />
              {
              Number(currentBook.price).toFixed(2)
              }
            </div>
          </div>

        </div>
        {currentBook.downloadLink &&
        (
        <div className="mb-8 mt-2">
          <a href={currentBook.downloadLink} target="_blank" rel="noopener noreferrer"
            className="btn btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 my-3 px-6 shadow-brand-500/30 transition-all font-semibold hover:translate-y-0.5 rounded-xl border border-brand-500">
            <Download size={20} />
            Download Complete Book
          </a>
        </div>
        )
        }

        <div className="prose prose-brand max-w-none">
          <h3 className="text-xl font-semibold text-gray-900 mb-3 border-b  border-gray-100 pb-2">Description</h3>
          <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
            {
            currentBook.description
            }
          </p>
        </div>

      </div>
    </div>
  </div>
</div>
)
}

export default BookDetails