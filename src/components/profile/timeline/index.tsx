import { Suspense, lazy } from 'react';

const Photos = lazy(() => import('./photos'));
const Feed = lazy(() => import('./feed'));
const Friends = lazy(() => import('./friends'))

const TimeLine = () => {
  return(
    <>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 md:w-[98%] md:mx-auto lg:w-70% xl:w-[70%] xl:grid-cols-4 xl:mx-auto mb-2 relative'>
        <aside className="sm:col-span-1 sm:mx-auto md:col-span-1 md:w-[95%] md:sticky top-20 h-fit lg:min-w-[95%] xl:col-span-2 xl:min-w-[70%] xl:w-[75%]">
            <Suspense>
              <Photos/>
              <Friends/>
            </Suspense>
        </aside>
        <main className="sm:col-span-1 sm:p-2 sm:mx-auto md:col-span-1 md:w-[95%] lg:w-full xl:col-span-2 xl:w-full">
          <Suspense>
            <Feed/>
          </Suspense>
        </main>
      </div>
    </>
  )
}

export default TimeLine;
