import { lazy, useEffect, useState } from "react";
import { client } from "../../../../api/client";
import { ROUTES_API } from "../../../../config";
import useReduxHook from "../../../../hooks/useReduxHook";
import { RootState } from "../../../../app/store";
import { useActionForErrorsHook } from "../../../../hooks/useActionForErrorsHook";
import { DatumSchema, ImageSchema } from "../../../../types/ImagesResponseApi";
import ImagePanelLoader from "../../../loaders/profile/ImagePanelLoader";
import HeaderPanelLoader from "../../../loaders/profile/HeaderPanelLoader";
import { Link } from "react-router-dom";

const Image  = lazy(() => import("./Image")); 

type ErrForActions = {
    status:number,
    statusText:string
}

const Photos = () => {
    const { myUseSelector } = useReduxHook();
    const [data, setData] = useState<typeof ImageSchema []>()
    const userProfile = myUseSelector((state:RootState) => state.userProfile);
    const { executeActions } = useActionForErrorsHook();
    const apiClient = client();

    const proccessData = (data:typeof DatumSchema[]) => {
      if(data.length > 0){
        const images = data.map(item => item?.images[0]);
        setData(images)
      }else{
        setData([])
      }
    }

    const fetchImages = async (signal?:AbortSignal) => {
        try{
          const res = await apiClient.get(ROUTES_API.getImagesUser(`${userProfile?.user?.id}`,9,1), signal) ;
          proccessData(res.data.data)
       }catch(err){
          const { status, statusText } = err as ErrForActions;
          executeActions({status: status, statusText: statusText})
       }
    }

    useEffect(() => {
        const controller = new AbortController();
        fetchImages(controller.signal);
        return ()=>{controller.abort()}
    },[])

  return (
    <div className='w-full bg-white shadow-lg rounded-md h-fit p-4 flex flex-col mb-4'> 
      <header className="flex flex-row justify-between p-1">
        {
          data 
            ? 
              <>
                <h2>Photos</h2>
                <Link to=''>Ver todas las fotos</Link>
              </>
            : <HeaderPanelLoader/>
        }
      </header>

      <div className="w-full grid grid-cols-3 transition duration-500 ease-in-out">
        {
          data?.map(image => <Image key={image?.id} data={image}/> )
        }
      </div>
    </div>  
  )
}

export default Photos