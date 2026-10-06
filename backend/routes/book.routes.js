import { Router } from "express";
import { getAllBooks, postBook, getSingleBook,putBook , deleteBook} from "../controllers/book.controllers.js";



const router = Router();

// Getting all books
router.get("/", getAllBooks)

//Create all book 
router.post("/",postBook)


//Getting Single Book
router.get("/:id",getSingleBook )


//Update Single Book
router.put("/:id", putBook)


//Delete  Book 
router.delete("/:id",deleteBook )


export default router;
 