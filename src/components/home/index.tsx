import { Suspense, lazy } from "react";


import Loader from "../loaders/redirections/LoaderForRedirections";
import { useVerifyUser } from "../../hooks/useVerifyUser";
import useReduxHook from "../../hooks/useReduxHook";
import { RootState } from "../../app/store";
import { useDispatchUser } from "../../hooks/useDispatchUser";





const Header = lazy(() => import('../header/Header'));
const ContentHome = lazy(() => import('./ContentHome'));


const TemplateHome = () => {

  const { myUseSelector, dispatch } = useReduxHook();
  const userLogged = myUseSelector((state:RootState) => state?.userLogged);

  useDispatchUser()

  
  const {verified} = useVerifyUser();
  
      
  return (
    <>
    
      
      
        <Header navBlock={false} />
        <Suspense fallback={<div><Loader/></div>}>
          
          {(verified && userLogged.entities) &&
          
          <ContentHome/>}
            
        </Suspense>
      
    
      
      
      
    </>
  );
}

export default TemplateHome;