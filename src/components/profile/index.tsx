import { Outlet, useLoaderData } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import Loader from '../loaders/LoaderForRedirections';
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

const Header = lazy(() => import('../header/Header'));
const TimeLine = lazy( () => import('./timeline'));
const ProfileBanner = lazy( () => import('./profileBanner'));

const TemplateProfile = () => {
    const dataLoader = useLoaderData();
    const { myUseSelector, dispatch } = useReduxHook();
    const { executeActions } = useActionForErrorsHook();
    const apiClient = client();

    const userLogged = myUseSelector((state:RootState) => state?.userLogged);
    const userProfile = myUseSelector((state:RootState) => state?.userProfile);
    
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

    return (
        <>
            {
                <div className='bg-gray-200' id='infiniteScroll' style={{overflow:'auto', height:'100vh'}}>
                    <Header navBlock={false}/>
                    <Suspense fallback={<div><Loader/></div>}>
                        {
                        <div>
                            {
                                (userProfile.entities && userLogged.entities ) &&
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