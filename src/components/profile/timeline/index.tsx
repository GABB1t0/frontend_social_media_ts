import { Suspense, lazy } from 'react';
import ImagePanel from './ImagePanel';
const InfoComponent = lazy(() => import('../../infocomponent/InfoComponent'))
const Feed = lazy(() => import('./Feed'));

const TimeLine = () => {
  return(
    <>
      <Suspense>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 md:w-[98%] md:mx-auto  lg:w-70% xl:w-[70%] xl:grid-cols-4 xl:mx-auto'>
          
          <aside className="sm:col-span-1 sm:w-[95%] sm:mx-auto md:col-span-1 md:w-[95%] lg:min-w-[95%] xl:col-span-2 xl:min-w-[70%] xl:w-[75%]">
            <div className="w-full flex flex-col gap-4 ">
                <ImagePanel/>
                <ImagePanel/>
            </div>
          </aside>
          <main className="sm:col-span-1 sm:w-[95%] sm:mx-auto md:col-span-1 md:w-[95%] lg:w-full xl:col-span-2 xl:w-full">
            <Feed/>
          </main>
        </div>
      </Suspense>
    </>
  )
}

export default TimeLine;

//flex justify-center flex-wrap sm:w-11/12 mx-auto my-3 md:gap-6

//aside: w-[95%] md:sticky md:w-[40%] top-20 lg:w-[45%] xl:w-[30%]  h-4/5 z-[49]

//main: w-[95%] h-fit md:w-[55%] lg:w-[55%] xl:w-[45%] overflow-y-auto