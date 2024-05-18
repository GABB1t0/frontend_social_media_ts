import React, { useState } from 'react'
import ImageLoader from '../../../loaders/profile/ImageLoader';
import { Datum } from '../../../../types/FindFriendsApiResponse';
import { Link } from 'react-router-dom';

type PropsContent = {data:Datum}

const Content = ({data}:PropsContent) => {
  const [isLoaded, setIsLoaded] = useState(false);
    const handleImageLoad = () => {
        setIsLoaded(true)
    };

  return (
    <li className={`col-span-1 min-h-[140px] max-h-[180px] p-1`}>
        <Link to={`/profile/${data?.id}`}>
          <div className={`flex flex-col h-[130px] border-[1px] rounded-md border-gray-300 ${!isLoaded && 'hidden'}`}>
            <img className={`w-full h-[130px] p-[2px]`} src={data?.url_image_profile} alt="" onLoad={handleImageLoad}/>
          </div>
        </Link>
        {isLoaded && <Link to={`/profile/${data?.id}`}><p className='text-[12px] pt-1 pb-1'>{data?.name} {data?.lastname}</p></Link>}
        {
          !isLoaded  && <ImageLoader/>
        }
    </li>
  )
}

export default Content