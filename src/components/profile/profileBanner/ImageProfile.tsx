import { useState } from "react";
import { RootState } from "../../../app/store";
import useReduxHook from "../../../hooks/useReduxHook"
import ImageProfileLoader from "../../loaders/profile/ImageProfileLoader";

const ImageProfile = () => {
    const { myUseSelector } = useReduxHook();
    const userProfile = myUseSelector((state:RootState) => state?.userProfile);
    const [isLoaded, setIsLoaded] = useState(false);

    const handleImageLoad = () => {
      setIsLoaded(true)
    };

    return (
      <div className= {`absolute -top-16 inset-x-0 flex items-center justify-center sm:-top-20 md:static p-1`}>
          <img
            src={userProfile?.user?.url_image_profile} 
            alt="Profile Photo" 
            className={`size-36 rounded-full sm:size-36 md:size-36 ${!isLoaded && 'hidden'}`}
            onLoad={handleImageLoad} 
          />
          {
            !isLoaded && <ImageProfileLoader/>
          }
      </div>
    )
  }
  
export default ImageProfile