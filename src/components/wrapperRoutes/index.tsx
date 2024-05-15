import { Suspense, useEffect } from "react"
import { Outlet, useNavigation } from "react-router-dom";
import useReduxHook from "../../hooks/useReduxHook";
import { removeUser } from "../../app/slices/userProfileSlice";
import stylesLoader from '../loaders/redirections/LoaderForRedirectios.module.css'


const WrapperRoutes = () => {
  const navigation = useNavigation();
  const { dispatch } = useReduxHook();

  useEffect(() => {
    if(navigation.state === 'loading'){
      dispatch(removeUser());
    }
  },[navigation, useNavigation])

  return (
    <div className='w-full'>
      <Suspense>
      {navigation.state === 'loading' && (
          <div className={stylesLoader.container}>
            <div className={stylesLoader.loader}></div>
          </div>
        )}
          <Outlet/>
      </Suspense>
    </div>
  )
}

export default WrapperRoutes;