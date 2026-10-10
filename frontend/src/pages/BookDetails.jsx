import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchBook } from "../redux/API/bookSlice"



const BookDetails = () => {
  const id = "6ac9dd25777e07834e52e38a"
  const dispatch = useDispatch()
  const {currentBook, isLoading, isError, message} = useSelector((state)=>state.book)
  useEffect(()=>{
    if(id){
      dispatch(fetchBook(id))
    }
  },[id, dispatch])
  // console.log(currentBook)
  if(isLoading || !currentBook){
    return <h1>Loading</h1>
  }

  return (
    <div>
      
    </div>
  )
}

export default BookDetails