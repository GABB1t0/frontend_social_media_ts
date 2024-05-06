import { Suspense, lazy, useEffect } from "react";
import { Feed } from "../Posts/Feed"
import { ImageProfileHome } from "../ImageProfileHome/ImageProfileHome"
import { useDispatchUser } from "../../hooks/useDispatchUser";
import { RecommendedPeople } from "../infocomponent/RecommendedPeople";
import Loader from "../loaders/LoaderForRedirections";
import ContentHome from "./ContentHome";
  





const Header = lazy(() => import('../header/Header'));


const TemplateHome = () => {
  
      
  return (
    <>
    {
      
      <div className='bg-gray-200' id='infiniteScroll' style={{overflow:'auto', height:'100vh'}}>
        <Header navBlock={false} />
        <Suspense fallback={<div><Loader/></div>}>
          
          {<ContentHome/>}
            
        </Suspense>
      </div>
    }
      
      
      
    </>
  );
}

export default TemplateHome;