import { useState } from "react";
import { Image as TypeImage } from "../../../../types/ImagesResponseApi"
import ImageLoader from "../../../loaders/profile/ImageLoader";

type PropsImage = {data:TypeImage}

const Image = ({data}:PropsImage) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const handleImageLoad = () => {
        setIsLoaded(true)
    };

    return(
        <li className={`col-span-1 border-[3px] border-gray-300 min-h-[140px] max-h-[140px] p-1`}>
            <img className={`w-full h-full ${!isLoaded && 'hidden'}`} src={data?.url} alt="" onLoad={handleImageLoad}/>
            {
                !isLoaded  && <ImageLoader/>
            }
        </li>
    )
}
export default Image;