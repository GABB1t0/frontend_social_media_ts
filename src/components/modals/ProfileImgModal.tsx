import { useState, useRef } from "react";
import { Modal } from "./Modal"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { set } from "zod";




interface props {
  
}
export const ProfileImgModal: React.FC<props>=()=>{

  const [image, setImage] = useState<string | null>(null);

  const inputImgRef = useRef<HTMLInputElement>(null);

  const imgUrl = [
  "/src/assets/img/Free_Sample_By_Wix.jpg",
  "/src/assets/img/Free_Sample_By_Wix.jpg",
  "/src/assets/img/Free_Sample_By_Wix.jpg",
  "/src/assets/img/Free_Sample_By_Wix.jpg",
  "/src/assets/img/Free_Sample_By_Wix.jpg",
  "/src/assets/img/Free_Sample_By_Wix.jpg",
  ]

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    if(!event.target.files) return
    console.log(event.target.files[0])
    
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleImageClick = (event:React.MouseEvent<HTMLImageElement>) => {
    if(!inputImgRef.current) return
    setImage(event.currentTarget.src)
  };

  
  return(
    <Modal title="Elige tu foto de perfil">

      <input name="image" id="image" type="file" 
      className="absolute hidden " 
      accept="image/png, image/jpeg" ref={inputImgRef} onChange={handleImageChange} />
      <label htmlFor="image" className="hover:cursor-pointer bg-[#fc6232]  px-2 py-1 text-white flex justify-center hover:opacity-50 mt-4">
        <AddPhotoAlternateIcon />
        Carga una imagen...
      </label>

      

      <div className="grid grid-cols-3 mt-4 gap-2">
        {imgUrl.map((url,index)=>(
          <img src={url} alt="" className="w-full hover:cursor-pointer hover:opacity-50 h-full object-cover" key={index} onClick={handleImageClick}/>
        ))}
      </div>

    </Modal>
    

  )
}