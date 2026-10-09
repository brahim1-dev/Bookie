import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/API/bookSlice";
import { useEffect } from "react"; // Removed unused useState

const Home = () => {
  const dispatch = useDispatch();
  // Simplified selector
  const { books } = useSelector((state) => state.book)

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]); // Added braces to prevent implicit return of the dispatch result

  return (
    <div>Home</div>
  );
};

export default Home;