import { useState } from "react";
import { RootState } from "../../../app/store";
import useReduxHook from "../../../hooks/useReduxHook";
import ImageCoverLoader from "../../loaders/profile/ImageCoverLoader";

const ImageCover = () => {
  const { myUseSelector } = useReduxHook();
  const userProfile = myUseSelector((state:RootState) => state?.userProfile);
  const [isLoaded, setIsLoaded] = useState(false);

    const handleImageLoad = () => {
      setIsLoaded(true)
    };
  
  return (
    <div className="w-full h-[420px]">
      <img 
        src={userProfile?.user?.url_image_cover}
        alt="cover Photo" 
        className={`rounded-none aspect-[16/9] md:w-full md:aspect-[16/6] max-h-[420px] ${!isLoaded && 'hidden'}`}
        onLoad={handleImageLoad} 
      />
       {
          !isLoaded && <ImageCoverLoader/>
        }
    </div>
  )
}
  
  export default ImageCover