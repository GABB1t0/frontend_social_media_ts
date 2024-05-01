import { setModalPost } from "../../app/slices/panelSlice"
import { useDispatch } from "react-redux"


interface Props {
    children: React.ReactNode;
    title: string
}


export const Modal: React.FC<Props> =({children, title})=>{
    const dispatch = useDispatch()

    return (
        <>
          <div className="flex justify-center items-center h-screen w-screen bg-black bg-opacity-50 z-50 top-[50%] left-[50%] fixed -translate-x-1/2 -translate-y-1/2" onClick={() => {
          
          dispatch(setModalPost())
          } }>
          </div>
          <div className=" flex flex-col min-h-96 w-80 sm:w-96 bg-white p-6 rounded-lg shadow-lg fixed z-[51] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  max-h-[80%]">
          <h2 className="h-[5%] text-2xl font-bold mb-4">{title}</h2>
            {children}
          </div>
        </>
    )
}