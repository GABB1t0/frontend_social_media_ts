import { useState } from "react"
import { PostModal } from "../modals/PostModal"
import { setModalPost } from "../../app/slices/panelSlice"
import { useDispatch, useSelector } from "react-redux"



export const CreatePost = () =>{
  const dispatch = useDispatch();
  const stateModalPost = useSelector((state:any)=>state.statePanel.statePostModal)

  

  const handleOpenModal = () =>{
    
    dispatch(setModalPost())
  }
  
  return(
    <>
    <div className=" flex w-full bg-white rounded-md h-16 items-center justify-center px-5 py-6 gap-1 shadow-lg">
      
      <img src="/src/assets/img/blank-profile-picture.jpg" className="size-9 rounded-full" alt="" />
      
      <form action="" onClick={handleOpenModal} className="bg-[#F1F1F1] rounded-xl py-2 px-3 w-[90%] flex gap-1 hover:cursor-pointer">
        
        <button type="button" className="bg-transparent w-[70%] focus:outline-none text-start opacity-25">Say Something</button>
        
      </form>

    </div>

    {stateModalPost && <PostModal /> }
    </>
  )
}