import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/API/bookSlice";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import BookCard from "../components/BookCard";
import Model from "../components/Model";
import { deleteBook } from "../redux/API/bookSlice";
import toast from "react-hot-toast";


const Home = () => {
  const dispatch = useDispatch();
  const { books, isLoading, isError, message } = useSelector((state) => state.book)
  const [bookToDelete, setBookToDelete] = useState(null)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleDelete = async () => {
    if (!bookToDelete) return

    setIsDeleting(true)
    try {
      const resultAction = await dispatch(deleteBook(bookToDelete._id))
      if (deleteBook.fulfilled.match(resultAction)) {
        toast.success("Book deleted successfully")
        setBookToDelete(null)
      } else {
        toast.error(resultAction.payload || "Failed to delete book")
      }
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <div className="">
      {isLoading ? (
        <div className="rounded-xl border border-gray-100 bg-white p-12 text-center text-gray-500" role="status">
          Loading books...
        </div>
      ) : isError ? (
        <div className="rounded-xl border border-red-100 bg-white p-12 text-center">
          <h3 className="mb-3 text-2xl font-bold text-gray-900">Couldn't load books</h3>
          <p className="mb-6 text-gray-500">{message || "Please check that the book service is running, then try again."}</p>
          <button type="button" className="btn btn-primary" onClick={() => dispatch(fetchBooks())}>
            Try Again
          </button>
        </div>
      ) : books.length===0?(
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 flex flex-col items-center justify-center text-center">
          <div className="bg-gray-50 p-4 rounded-full mb-4">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">No Books Found</h3>
            <p className="text-gray-500 max-w-md mb-6">We couldn't find any books, the books library is currently empty</p>
            <Link to="/add-book" className="btn btn-primary">Add Your First Book </Link>
          </div > 
          No Books Found
        </div>
      ):(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {
            books.map((book)=>(
              <div key={book._id}>
                <BookCard book={book} onDelete={setBookToDelete}/>
              </div>
              )
            )
          }
        </div>
      )}
      {bookToDelete && (
        <Model title="Delete book?" onClose={() => setBookToDelete(null)}>
          <p className="text-gray-600">
            Are you sure you want to delete <span className="font-semibold text-gray-900">{bookToDelete.title}</span>? This action cannot be undone.
          </p>
          <div className="mt-6 flex justify-end gap-3">
            <button type="button" className="btn btn-secondary" onClick={() => setBookToDelete(null)} disabled={isDeleting}>
              Cancel
            </button>
            <button type="button" className="btn btn-danger" onClick={handleDelete} disabled={isDeleting}>
              {isDeleting ? "Deleting..." : "Delete Book"}
            </button>
          </div>
        </Model>
      )}
    </div>
  );
};

export default Home;