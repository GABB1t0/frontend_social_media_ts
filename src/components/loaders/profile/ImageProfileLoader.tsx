const ImageProfileLoader = () => {
  return (
    <>
      <div className="col-span-1 border-2 size-36 rounded-full sm:size-36 md:size-36">
          <div role="status" className="flex items-center justify-center sm:size-36 md:size-36 bg-gray-300 rounded-full animate-pulse dark:bg-gray-700">
            <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20"></svg>
              <span className="sr-only">Loading...</span>
          </div>            
      </div>
    
      
    </>
  )
}

export default ImageProfileLoader