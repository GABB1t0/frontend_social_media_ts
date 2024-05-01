import { Suspense, lazy } from "react";
import { Feed } from "../Posts/Feed"
import { ImageProfileHome } from "../ImageProfileHome/ImageProfileHome"
import  InfoComponent  from "../infocomponent/InfoComponent"
import { useLoaderData } from "react-router-dom";

const Header = lazy(() => import('../header/Header'));

const TemplateHome = () => {
  
  const dataUserLogged = useLoaderData();
  console.log(dataUserLogged)

  // const clients = client();
  // const navigate = useNavigate();
  //useEffect
    // const verifyUser = async()=>{
    //     const resVerified = await clients.get(routesApi.userLogged())
    //     console.log(JSON.stringify(resVerified))
    //   setShowHome(true)
    // }
    // verifyUser();



  


  return (
    <>
      <Suspense>
        
        <Header navBlock={false} />
          <div className='container flex justify-center sm:w-11/12 mx-auto my-3 md:gap-6 lg:gap-6 xl:w-4/5'>
            <aside className="lg:w-[25%] sticky top-20 h-4/5 z-[49]">
              <div className="hidden md:flex flex-col gap-4 ">
                
                {/* <ImageProfileHome />
                <InfoComponent/> */}
              </div>
            </aside>
            <main className="w-full lg:w-[50%] overflow-y-auto mt-[68px]">
              <Feed/>
            </main>
            <aside className="lg:w-[25%] h-4/5 sticky top-20 right-0  z-40">
              <div className="hidden lg:flex flex-col gap-4">
                {/* <InfoComponent/>
                <InfoComponent/> */}
              </div>
            </aside>
          </div>
          
      </Suspense>
    </>
  );
}

export default TemplateHome;