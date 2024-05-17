import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from 'react';
import { client } from '../../../../api/client';
import { ROUTES_API } from '../../../../config';
import { Data, Datum, Posts } from '../../../../types/SearchPostProfileApiResponse'
import { EndPointApi } from '../../../../types';
import { Post } from '../../../Posts/Post';
import { CreatePost } from '../../../Posts/CreatePost';
import useReduxHook from '../../../../hooks/useReduxHook';
import { RootState } from '../../../../app/store';
import { useActionForErrorsHook } from '../../../../hooks/useActionForErrorsHook';
import MyFacebookLoader from '../../../loaders/posts/MyFacebookLoader';
import { PostsEnders } from '../../../enders/PostsEnders';

type PropsFetchData = { 
  page:number|null, 
  url:EndPointApi|null, 
  signal?:AbortSignal
}

type ErrForActions = {
  status:number,
  statusText:string
}

const Feed = () => {

  const { myUseSelector } = useReduxHook();
  const userProfile = myUseSelector((state:RootState) => state?.userProfile);
  const [page,setPage] = useState<Data>();
  const [items,setItems] = useState<Datum[]>([]);
  const [hasMore, setHasMore] = useState(true)
  const { executeActions } = useActionForErrorsHook();
  const apiClient = client()
  const PAGINATIONDEFAULT = 2;

  const proccessDataFetch = (data:Data) => {
    const posts = (data.posts) as Posts
    
    //Verficamos si la siguiente page tiene datos
    if(posts.next_page_url === null){
      setHasMore(false);
    }
    //Pusheamos los nuevos posts
    const newDataPosts = posts.data
    setItems([...items, ...newDataPosts])
    setPage(data)
  }
  
  const fetchData = async ({page, url, signal}:PropsFetchData) => {  
    
    const uri = page === null
      ? url
      : ROUTES_API.searchPostsUser(`${userProfile?.user?.id}`,PAGINATIONDEFAULT,page);

    if(uri === null) return   


    const request = signal != undefined 
      ? apiClient.get(uri,signal) 
      : apiClient.get(uri);

    try{
      const res = await request;
      proccessDataFetch(res.data);
    }catch(err){
      const {status, statusText} = err as ErrForActions;
      executeActions({status: status, statusText:statusText})
    }
  }

  const acomodarUrl = (url:string|null|undefined) => {
    if(url === null || url === undefined) return null; 
    return url.substring(25,url.length) as EndPointApi
  }

  useEffect(()=>{
    const abortcontroller = new AbortController()
    const signal = abortcontroller.signal
    fetchData({
      page:1,
      url:null,
      signal:signal
    })

    return () => {
      abortcontroller.abort()
    }
  },[])

  return (
    <>
        { 
          <InfiniteScroll
              dataLength={items.length} //This is important field to render the next data
              next={ () => { 
              fetchData({
                  page:null,
                  url:acomodarUrl(page?.posts?.next_page_url)
              })
              }}
              hasMore={hasMore}
              scrollableTarget='infiniteScroll'
              loader={
              <div className='flex justify-end border-2 p-2'>
                  <div className="w-full md:w-[100%] overflow-y-auto gap-2">
                      <MyFacebookLoader />
                      <MyFacebookLoader />
                  </div>
              </div>
              }
              endMessage={
                  <div className='flex justify-end mb-3 p-2'>
                    <div className="w-full md:w-[100%] overflow-y-auto">
                      <PostsEnders/>
                    </div>
                  </div>
              }
              >
              <div className='w-full h-auto flex flex-col gap-y-3'>
                  <CreatePost/>
                  {
                  items.map((item) => (
                      <Post key={item.id} data={item}/>
                  ))
                  }
              </div>
            </InfiniteScroll>
          } 
    </>
  )
}

export default Feed