import { X } from "lucide-react"
import { useEffect } from "react"


const Model = ({children, title, onClose}) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close dialog"
        className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-xl animate-in zoom-in-95 duration-200"
        >
          <div className="flex justify-between items-center p-6 border-b border-gray-100">
            <h2 id="modal-title" className="text-xl font-semibold">{title}</h2>
            <button type="button" onClick={onClose} aria-label="Close dialog" className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-full transition-colors">
              <X className="" size={20}></X>
            </button>
          </div>
          <div className="p-6 max-h-[80vh] overflow-y-auto">
            {children}
          </div>
        </div>
    </div>
  )
}

export default Model