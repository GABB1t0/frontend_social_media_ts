import { useLocation } from 'react-router-dom';
import { lazy, useEffect, useState } from 'react';
import { client } from '../../../api/client';
import {
  ROUTES_API as routesApi
} from '../../../config'
import useReduxHook from '../../../hooks/useReduxHook';
import NavigationProfile from './NavigationProfile';
import { routesProfile } from '../../../types';
import ImageProfile from './ImageProfile';
import ImageCover from './ImageCover';
import { RootState } from '../../../app/store';

const ButtonAddFriend = lazy(() => import('./ButtonAddFriend'));
const ButtonShowFriend = lazy(() => import('./ButtonShowFriend'));

const ProfileBanner = () => { 

  const [isFriend, setIsFriend] = useState<boolean|undefined>(undefined);
  const location = useLocation();
  const { myUseSelector } = useReduxHook();
  const userProfile = myUseSelector((state:RootState) => state?.userProfile);
  const userLogged = myUseSelector((state:RootState) => state?.user)
  const apiClient = client();
  
  useEffect(() => {
    const abortcontroller = new AbortController()
    const signal = abortcontroller.signal;

    apiClient.get(routesApi.verifyFriendshipRelationship(`${userProfile?.entities?.id}`),signal)
      .then(response => {
        const data = response.data.length > 0;
        setIsFriend(data)
      })
    
    return () => {
      abortcontroller.abort()
    } 
  },[])

  return(
    <>
      <div className="flex flex-col content-center  bg-white shadow-md mb-5" >
        <ImageCover/>
        <div className="mx-auto flex relative h-44 justify-center md:justify-start md:w-11/12  ">
          <div className="flex flex-col justify-center self-end pb-5 gap-2 md:w-full	">
            <div className='flex justify-center md:w-full md:gap-3'>
              <ImageProfile/>
              <div className='w-full flex justify-center flex-wrap gap-1 md:w-4/5 md:self-center md:items-center md:justify-between'>
                <p className='sm:text-sm font-semibold md:flex md:text-2xl'>{userProfile?.entities?.name} {userProfile?.entities?.lastname}</p>
                {
                  userLogged?.entities?.id === userProfile?.entities?.id
                    ? ''
                    : isFriend === undefined
                      ? ''
                      : isFriend
                        ? <ButtonShowFriend/>
                        : <ButtonAddFriend/>
                }
              </div>
            </div>
            <NavigationProfile location={location.pathname as routesProfile}/>
          </div>    
        </div>
      </div>
    </>
  );
};

export default ProfileBanner;