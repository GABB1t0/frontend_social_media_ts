import { Suspense, lazy } from "react";
import { useVerifyUser } from "../../hooks/useVerifyUser";
import useReduxHook from "../../hooks/useReduxHook";
import { RootState } from "../../app/store";
import { useDispatchUser } from "../../hooks/useDispatchUser";

const Header = lazy(() => import('../header/Header'));
const ContentHome = lazy(() => import('./ContentHome'));

const TemplateHome = () => {

  const {verified} = useVerifyUser();
  const { myUseSelector } = useReduxHook();
  const userLogged = myUseSelector((state:RootState) => state?.userLogged);

  useDispatchUser()
  
  return (
    <>
      <Suspense>
        <Header navBlock={false}/>
        {(verified && userLogged.entities) && <ContentHome/>}      
      </Suspense>
    </>
  );
}

export default TemplateHome;