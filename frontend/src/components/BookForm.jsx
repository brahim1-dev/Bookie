const BookForm = () => {
return (
<form className="space-y-5">
  <div className="">
    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Book Title</label>
    <input type="text" id="title" name="title" required value="" className="input-field"
      placeholder="Enter Book Title" />
  </div>
  <div className="">
    <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">Author Name</label>
    <input type="text" id="author" name="author" required value="" className="input-field"
      placeholder="Enter Author Name" />
  </div>
  <div className="">
    <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
    <input type="number" id="price" name="price" required min="0" step="0.01" value="" className="input-field"
      placeholder="Enter Price" />
  </div>
  <div className="">
    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description </label>
    <textarea type="text" id="description" rows="4" name="description" required value=""
      className="input-field resize-none" placeholder="Enter Description" />
  </div>
  <div className="">
    <label htmlFor="coverImage" className="block text-sm font-medium text-gray-700 mb-1">Cover Image URL (optional)</label>
    <input type="url" id="coverImage" name="coverImage" required  value="" className="input-field" placeholder="https://example.com/image.png"/>
  </div>
    <div className="">
      <label htmlFor="downloadLink" className="block text-sm font-medium text-gray-700 mb-1">Download Link (optional)</label>
      <input type="url" id="downloadLink" name="downloadLink" required  value="" className="input-field" placeholder="https://example.com/Book.pdf"/>
    </div>
    <div className="">
      <button className="btn btn-primary w-full sm:w-auto mni-w-[120px]" type="submit">
        Add Book
      </button>
    </div>
    </form>
  )
}

export default BookForm