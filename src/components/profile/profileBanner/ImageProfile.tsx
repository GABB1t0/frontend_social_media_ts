import { RootState } from "../../../app/store";
import useReduxHook from "../../../hooks/useReduxHook"

const ImageProfile = () => {
    const { myUseSelector } = useReduxHook();
    const userProfile = myUseSelector((state:RootState) => state?.userProfile);

    return (
      <div className= "absolute -top-16 inset-x-0 flex items-center justify-center sm:-top-20 md:static p-1">
      <img 
          src={userProfile?.entities?.url_image_profile} 
          alt="Profile Photo" 
          className=" size-36 rounded-full sm:size-36 md:size-36" 
      />
      </div>
    )
  }
  
export default ImageProfile