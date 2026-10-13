import { useState } from "react"



const BookForm = ({onSubmit, isLoading, initialData}) => {
  const [formData, setFormData ] = useState(() => ({
    title: initialData?.title || '',
    author: initialData?.author || '',
    price: initialData?.price ?? '',
    description: initialData?.description || '',
    coverImage: initialData?.coverImage || '',
    downloadLink: initialData?.downloadLink || ''
  }))

  // console.log(formData)

  const handleChange = (e)=>{
    setFormData((prev)=>({
      ...prev, [e.target.name]:e.target.value
    }))
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    onSubmit({
      ...formData, price:Number(formData.price)
    })
  }

return (
<form className="space-y-5" onSubmit={handleSubmit}>
  <div className="">
    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Book Title</label>
    <input 
      type="text" 
      id="title" 
      name="title" 
      required 
      value={formData.title}
      className="input-field"
      placeholder="Enter Book Title" 
      onChange={handleChange} />
  </div>
  <div className="">
    <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">Author Name</label>
    <input 
      type="text" 
      id="author" 
      name="author" 
      required 
      value={formData.author} 
      className="input-field"
      placeholder="Enter Author Name" 
      onChange={handleChange}/>
  </div>
  <div className="">
    <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
    <input 
      type="number" 
      id="price" 
      name="price" 
      required 
      min="0" 
      step="0.01" 
      value={formData.price}
      className="input-field"
      placeholder="Enter Price" 
      onChange={handleChange}/>
  </div>
  <div className="">
    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description </label>
    <textarea 
      type="text" 
      id="description" 
      rows="4" 
      name="description" 
      required 
      value={formData.description}
      className="input-field resize-none" 
      placeholder="Enter Description" 
      onChange={handleChange}/>
  </div>
  <div className="">
    <label htmlFor="coverImage" className="block text-sm font-medium text-gray-700 mb-1">Cover Image URL (optional)</label>
    <input 
      type="url" 
      id="coverImage" 
      name="coverImage"
      value={formData.coverImage}
      className="input-field" 
      placeholder="https://example.com/image.png"
      onChange={handleChange}/>
  </div>
    <div className="">
      <label htmlFor="downloadLink" className="block text-sm font-medium text-gray-700 mb-1">Download Link (optional)</label>
      <input 
        type="url" 
        id="downloadLink" 
        name="downloadLink" 
        value={formData.downloadLink}
        className="input-field" 
        placeholder="https://example.com/Book.pdf"
        onChange={handleChange} />
    </div>
    <div className="">
      <button className="btn btn-primary w-full sm:w-auto min-w-[120px]" type="submit" disabled={isLoading}>
        {isLoading ? "Saving..." : (initialData?"Update Book" : "Add Book") }
      </button>
    </div>
    </form>
  )
}

export default BookForm