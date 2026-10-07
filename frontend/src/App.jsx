import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AddBook from "./pages/AddBook"
import EditBook from "./pages/EditBook"
import BookDetails from "./pages/BookDetails"




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/add-book"element={<AddBook/>}/>
        <Route path="/edit/:id"element={<EditBook/>}/>
        <Route path="/book/:id"element={<BookDetails/>}/>
      </Routes>
    </Router>
  )
}

export default App