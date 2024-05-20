import React, { ReactNode } from 'react'

// type PropsPanel = { 
//   contentHeader:ReactNode,
//   contentList:ReactNode
// }

const Panel = ({children}) => {
  
  return (
    <div className='w-full bg-white shadow-lg rounded-md h-fit p-4 flex flex-col mb-4'>
      <header className="flex flex-row justify-between p-1">
        {children[0]}
      </header>

      <ul className="w-full grid grid-cols-3 transition duration-500 ease-in-out">
        {children[1]}
      </ul>
    </div>  
  )
}

export default Panel