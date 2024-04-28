import { Suspense } from "react"
import stylesLoader from '../../components/loaders/LoaderForRedirectios.module.css'
import { Outlet, useNavigation } from "react-router-dom";


const WrapperRoutes = () => {
  const navigation = useNavigation()

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