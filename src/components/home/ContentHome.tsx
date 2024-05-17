
import { Feed } from "../Posts/Feed"
import { ImageProfileHome } from "../ImageProfileHome/ImageProfileHome"
import { useDispatchUser } from "../../hooks/useDispatchUser";
import { RecommendedPeople } from "../infocomponent/RecommendedPeople";
import useReduxHook from "../../hooks/useReduxHook";
import { RootState } from "../../app/store";
import { closeDropDownMenu } from "../../app/slices/panelSlice";


const ContentHome = () => {
  const { dispatch,myUseSelector} = useReduxHook()
  const panelState = myUseSelector((state:RootState) => state.statePanel);
  

  const handleClick = (e:React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target && target.id !== 'dropdownmenu') {
      if (panelState.stateDropdownMenu) {
        dispatch(closeDropDownMenu());
      }
    }
  }
  
  

  return (
    <>
    
      

      <div 
        className='bg-gray-200  min-h-screen'
        onClick={handleClick}
      >
        <div className='container flex justify-center sm:w-11/12 mx-auto mt-3 md:gap-6 lg:gap-6 xl:w-4/5'>
          <aside className="lg:w-[25%] sticky top-20 h-4/5 mt-[68px] z-[49]">
            <div className="hidden md:flex flex-col gap-4 ">
              <ImageProfileHome />
              <RecommendedPeople/>
            </div>
          </aside>
          <main className="w-full lg:w-[50%] overflow-y-auto mt-[68px]">
            <Feed/>
          </main>
          <aside className="lg:w-[25%] h-4/5 sticky top-20 right-0  z-40">
            <div className="hidden lg:flex flex-col gap-4">
              
            </div>
          </aside>
        </div>

      </div>

        
      
      
          
          
    </>
  );
}

export default ContentHome;