import { Suspense, lazy, useEffect } from "react";
import { Feed } from "../Posts/Feed"
import { ImageProfileHome } from "../ImageProfileHome/ImageProfileHome"
import { useDispatchUser } from "../../hooks/useDispatchUser";
import { RecommendedPeople } from "../infocomponent/RecommendedPeople";
import Loader from "../loaders/redirections/LoaderForRedirections";

  





const Header = lazy(() => import('../header/Header'));
const ContentHome = lazy(() => import('./ContentHome'));


const TemplateHome = () => {

  const {verified} = useDispatchUser()
  
      
  return (
    <>
    
      
      
        <Header navBlock={false} />
        <Suspense fallback={<div><Loader/></div>}>
          
          {verified && <ContentHome/>}
            
        </Suspense>
      
    
      
      
      
    </>
  );
}

export default TemplateHome;