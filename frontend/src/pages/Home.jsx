import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/API/bookSlice";
import { useEffect } from "react"; // Removed unused useState
import {Link} from "react-router-dom"
const Home = () => {
  const dispatch = useDispatch();
  // Simplified selector
  const { books, isLoading, isError, message } = useSelector((state) => state.book)

  useEffect(() => {
    if(!isError){
      console.log(message)
    }
    dispatch(fetchBooks());
  }, [dispatch, isError, message]); // Added braces to prevent implicit return of the dispatch result

  return (
    <div className="">
      {books.length===0?(
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 flex flex-col items-center justify-center text-center">
          <div className="bg-gray-50 p-4 rounded-full mb-4">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">No Books Found</h3>
            <p className="text-gray-500 max-w-md mb-6">We couldn't find any books, the books library is currently empty</p>
            <Link to="/add-book" className="btn btn-primary">Add Your First Book </Link>
          </div>
          No Books Found
        </div>
      ):(
        <div>
          {
            books.map((book)=>(
              <div>
                <h3>{book.title}</h3>
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