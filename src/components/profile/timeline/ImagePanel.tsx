import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { client } from "../../../api/client"
import { ROUTES_API } from "../../../config"
import useReduxHook from "../../../hooks/useReduxHook"
import { RootState } from "../../../app/store"
import { useActionForErrorsHook } from "../../../hooks/useActionForErrorsHook"
import { DatumSchema, Image as TypeImage } from "../../../types/ImagesResponseApi"

type ErrForActions = {
    status:number,
    statusText:string
}

type PropsImage = {data:TypeImage}

const Image = ({data}:PropsImage) => {

    console.log(data)
    return(
        <div className="col-span-1 border-2 border-gray-300 min-h-[140px] max-h-[140px] p-1">
            <img src={data?.url} alt="" />
        </div>
    )
}

const ImagePanel = () => {

    const { myUseSelector } = useReduxHook();
    const userProfile = myUseSelector((state:RootState) => state.userProfile);
    const [data,setData] = useState<typeof DatumSchema []>([]);
    const { executeActions } = useActionForErrorsHook();
    const apiClient = client();

    const fetchImages = async (signal:AbortSignal) => {
       try{
        const res = await apiClient.get(ROUTES_API.getImagesUser(`${userProfile?.entities?.id}`,9,1), signal);
        setData(res.data.data)
       }catch(err){
        const { status, statusText } = err as ErrForActions;
        executeActions({status: status, statusText: statusText})
       }
    }

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal;
        fetchImages(signal)
    },[])
  return (
    <>
        <div className='w-full bg-white shadow-lg rounded-md h-[480px] p-4 flex flex-col'>
            <div className="flex justify-between">
                <h2>Photos</h2>
                <Link to=''>Ver todas las fotos</Link>
            </div>
            <div className="w-full grid grid-cols-3">

                {
                    data.length > 0 &&
                        data.map(image => {
                            const img = image.images[0];
                            return <Image data={img}/> 
                        })
                }
                
            
            </div>
            
            {/* <ListImage cols={3} /> */}
        </div>
    </>
  )
}

export default ImagePanel