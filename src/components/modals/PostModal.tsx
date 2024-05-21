
import { useRef, useState } from "react"

import { client } from "../../api/client"
import { 
  
  ROUTES_API as routesApi
} from '../../config';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DeleteIcon from '@mui/icons-material/Delete';
import { Modal } from "./Modal";





interface props {
  
}

export const PostModal: React.FC<props> = () => {

  const clients = client()
  const textAreaRef= useRef<HTMLTextAreaElement|null>(null)
  const inputImgRef = useRef<HTMLInputElement|null>(null)

  const [value, setValue] = useState("");
  const [file, setFile] = useState<string[]>([]);
  const [images,setImages]= useState<File[]>([])

  document.body.style.overflow = "hidden"
  document.body.style.maxHeight="100vh"
    
  const resizeTextArea = () =>{

    if(!textAreaRef.current) return
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  
  }

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) =>{

    if(!inputImgRef.current || !inputImgRef.current.files) return
    const sust = inputImgRef.current?.files[Symbol.iterator](); 
    const arr = [...sust]

    const formData = new FormData(e.currentTarget);
      console.log(images)
    
      images.forEach((file)=>{
        formData.append("images[]", file)
      })
    
    
    console.log(formData.get("images"));

    formData.append("description", value)
    
    try{
      e.preventDefault()
      
      const resApi = await clients.post(routesApi.createPost(), formData)
      alert("Post Creado Exitosamente")

    }catch(error){
      console.log(error)
    }
  }

  function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.files);
    

    if(!e.target.files) return
    const sust = e.target.files[Symbol.iterator](); 
    const arr = [...sust]
    setImages([...images,...arr])
    console.log(arr);
    const arr2 = arr.map(item => URL.createObjectURL(item))
    
    setFile([...file,...arr2]);
    
    
  }

  const handleDelete = (key: number, item:string) =>{

    console.log(key, item)
    
    const newFile = file.filter(item2 => item2 !== item)
    setFile(newFile)
    
    
    images.splice(key, 1)
    
    setImages([...images])
    
  }

  

  

  

  return (
    <>
      <Modal  title="Hacer publicacion">
        <form onSubmit={handleSubmit} className=" flex flex-col gap-6 min-h-[95%]  ">

          <div className=" overflow-y-auto   ">

            <textarea ref={textAreaRef} name="description" id="description" typeof="text" 
            placeholder="Escribe Algo..." 
            className="w-full resize-none overflow-hidden px-2 py-2 min-h-40 " 
            onChange={(e) =>{
              setValue(e.target.value);
              resizeTextArea()}}
            value={value}></textarea>
            
            <input name="image" id="image" type="file" 
            className="absolute hidden " accept="image/png, image/jpeg"
            ref={inputImgRef}
            onChange={handleChange}
            multiple/>

            {file != null 
            && 
            file.map((item,key) => 
            <div key={key} className="relative mt-4">
              <span className="absolute hover:cursor-pointer right-0 bg-white rounded-full opacity-50" onClick={()=>handleDelete(key,item)}>
                <DeleteIcon/>
              </span>
              <img src={item} alt="" className="max-w-full mx-auto "/>
            </div>)
            
            }
            
            <label htmlFor="image" className="hover:cursor-pointer bg-[#fc6232]  px-2 py-1 text-white flex justify-center hover:opacity-50 mt-4">
            <AddPhotoAlternateIcon />
            Carga una imagen...</label>

          </div>

          <button type="submit" className="bg-[#fc6232] text-white rounded-xl px-2 py-1 w-[30%] self-end" >Shared</button>

        </form>
      </Modal>
        
        
      
    </>

    
  );
}