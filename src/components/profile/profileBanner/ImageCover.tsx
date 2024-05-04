import { RootState } from "../../../app/store";
import useReduxHook from "../../../hooks/useReduxHook";

const ImageCover = () => {
  const { myUseSelector } = useReduxHook();
  const userProfile = myUseSelector((state:RootState) => state?.userProfile);
  return (
    <div>
        <img 
        src={userProfile?.entities?.url_image_cover}
        alt="cover Photo" 
        className="rounded-none	aspect-[16/9] md:w-full md:aspect-[16/6]"
        />
    </div>
  )
}
  
  export default ImageCover