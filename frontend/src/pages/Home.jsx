import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/API/bookSlice";
import { useEffect } from "react";
import {Link} from "react-router-dom"
import BookCard from "../components/BookCard";


const Home = () => {
  const dispatch = useDispatch();
  const { books, isLoading, isError, message } = useSelector((state) => state.book)

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

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
                <BookCard book={book}/>
              </div>
              )
            )
          }
        </div>
      )}
    </div>
  );
};

export default Home;