import { ArrowLeft, Book, BookDashed  } from "lucide-react"
import BookForm from "../components/BookForm"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { clearCurrentBook, fetchBook, updateBook } from "../redux/API/bookSlice"
import { useEffect } from "react"
import toast from "react-hot-toast"


const EditBook = () => {
  const dispatch = useDispatch()

  const {id} = useParams()
  const navigate = useNavigate()
  const {isLoading, currentBook, isError, message} = useSelector((state)=>state.book)

  useEffect(()=>{
    if(id){
      dispatch(fetchBook(id))
    }
    return ()=>{
      dispatch(clearCurrentBook())
    }
  }, [id, dispatch])

  useEffect(()=>{
    if(isError && !currentBook){
      toast(message || "Failed to load a Book")
      navigate('/')
    }
  }, [isError, message, currentBook, navigate])
  console.log(currentBook)
  const handleSubmit = async (bookData)=>{
    const resultAction = await dispatch(updateBook({id, bookData}))
    if(updateBook.fulfilled.match(resultAction)){
      toast.success("Book Updated Successfully")
      navigate('/')
    }else{
      toast.error(resultAction.payload || 'Failed to update book')
    }
  }

  return (
    <div>
      <div className="max-w-2xl mx-auto animate-in slide-in-from-bottom-4 duration-500">
        <div className="mb-6">
          <Link className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-brand-600 transition-colors" to="/">
          <ArrowLeft size={16} className="mr-1"/> Back to List</Link>
        </div>
        <div className="bg-white p-8 rounded 2xl shadow-md border border-gray-100">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Book</h1>
          <BookForm initialData={currentBook} onSubmit={handleSubmit} isLoading={isLoading}/>
        </div>
      </div>
    </div>
  )
}

export default EditBook