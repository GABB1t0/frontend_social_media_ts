import React from "react";

interface props {
  titulo: string
  children: React.ReactNode
}
const InfoComponent: React.FC<props> = ({titulo,children}) =>{
  return (
    <>
    <div className='bg-white shadow-lg rounded-md h-72 p-4 flex flex-col '>
      <h3 className="text-base h-[10%]">{titulo}</h3>
      <hr />
      <ul className="flex flex-col  gap-5 justify-center  h-[90%]">
        
        {children}
      </ul>

    </div>
    </>
  )
} 

export default InfoComponent;