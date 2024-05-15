import { Outlet, useLoaderData } from 'react-router-dom';
import { Suspense, lazy, useEffect, useRef } from 'react';
import useReduxHook from '../../hooks/useReduxHook';
import { ROUTES_API } from '../../config';
import { client } from '../../api/client';
import { 
    addUser as addUserProfile, 
    removeUser as removeUserProfile } 
from '../../app/slices/userProfileSlice';
import { addUser } from '../../app/slices/userLoggedSlice';
import { RootState } from '../../app/store';
import { useActionForErrorsHook } from '../../hooks/useActionForErrorsHook';
import { UserSchema } from '../../types/SearchUserLoggedApiResponse'
import { closeDropDownMenu } from '../../app/slices/panelSlice';

import Header from '../header/Header';
const TimeLine = lazy( () => import('./timeline'));
const ProfileBanner = lazy( () => import('./profileBanner'));

const TemplateProfile = () => {
    const dataLoader = useLoaderData();
    const { myUseSelector, dispatch } = useReduxHook();
    const { executeActions } = useActionForErrorsHook();
    const apiClient = client();

    const userLogged = myUseSelector((state:RootState) => state?.userLogged);
    const userProfile = myUseSelector((state:RootState) => state?.userProfile);
    const panelState = myUseSelector((state:RootState) => state.statePanel);

    const handleClick = (e:React.MouseEvent<HTMLElement>) => {

        if(e.target && e.target.id !== 'dropdownmenu'){
            if(panelState.stateDropdownMenu){
                dispatch(closeDropDownMenu())
            }
        }
    }
    
    const setDataUserProfile = (data: typeof UserSchema) => {
        dispatch(addUserProfile(data));
    }
  
    const setDataUserLogged = (data: typeof UserSchema) => {
        dispatch(addUser(data));
    }

    const fetchData = (signal:AbortSignal) => {
        apiClient.get(ROUTES_API.userLogged(),signal)
        .then(response => {
            //Guardamos datos en el store
            console.log(response)
            setDataUserLogged(response.data)
        })
        .catch(err => {
            const { status, statusText } = err;
            executeActions({status: status, statusText: statusText})
        })
    }

    useEffect(() => {
      let abortController = null;
      //Verificamos si los datos del usuario logueado se encuentran en el estado global
      if(userLogged?.entities === undefined){
          abortController = new AbortController();
          const signal = abortController.signal;
          fetchData(signal);
      }        
      setDataUserProfile(dataLoader as typeof UserSchema);
      return () => {
          abortController?.abort()
          dispatch(removeUserProfile())
      }
    },[]);

    useEffect(() => {
        setDataUserProfile(dataLoader as typeof UserSchema);
    },[dataLoader])

    return (
      <>
        {
          <div 
            className='bg-gray-200'
            style={{overflow:'auto', height:'100vh'}} 
            id='infiniteScroll'
            onClick={handleClick} 
            >
              <Header navBlock={false}/>
              <Suspense>
                {
                  <div>
                    {
                      (userProfile?.user && userLogged.entities ) &&
                      <>
                        <ProfileBanner />
                          {
                            location.pathname.includes('about') ||
                            location.pathname.includes('photos') ||
                            location.pathname.includes('friends')
                             ?   
                               <Outlet/>
                             :
                               <TimeLine/> 
                           }
                      </> 
                    }
                  </div>      
                }
              </Suspense>
          </div> 
        }
      </>
    );
}

export default TemplateProfile;