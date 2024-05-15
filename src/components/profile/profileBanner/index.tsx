import { useLocation } from 'react-router-dom';
import NavigationProfile from './NavigationProfile';
import { routesProfile } from '../../../types';
import ImageProfile from './ImageProfile';
import ImageCover from './ImageCover';
import Main from './Main';

const ProfileBanner = () => { 
  const location = useLocation();
  return(
    <>
      {
        <div className="flex flex-col content-center  bg-white shadow-md mb-5" >
          <ImageCover/>
          <div className="mx-auto flex relative h-44 justify-center md:justify-start md:w-11/12  ">
            <div className="flex flex-col justify-center self-end pb-5 gap-2 md:w-full	">
              <div className='flex justify-center md:w-full md:gap-3'>
                <ImageProfile />
                <Main/>
              </div>
              <NavigationProfile location={location.pathname as routesProfile}/>
            </div>    
          </div>
        </div>
      }
    </>
  );
};

export default ProfileBanner;