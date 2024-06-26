import { FC, useEffect, useState } from "react"
import { CreatePost } from "./CreatePost"
import { Post } from "./Post"
import InfiniteScroll from 'react-infinite-scroll-component';
import { client } from "../../api/client";
import { ROUTES_API } from "../../config";
import useReduxHook from "../../hooks/useReduxHook";
import { RootState } from "../../app/store";
import { Data, Datum, Posts } from "../../types/SearchPostProfileApiResponse";
import { EndPointApi, ErrForActions } from "../../types";
import MyFacebookLoader from "../loaders/posts/MyFacebookLoader";
import  PostsEnders  from "../enders";
import { useActionForErrorsHook } from "../../hooks/useActionForErrorsHook";

type PropsFetchData = { 
  page:number|null, 
  url:EndPointApi|null, 
  signal?:AbortSignal
}

const Feed = ()=>{

  const [posts, setPosts] = useState<Datum[]>([])
  const [page, setPage] = useState<Data>()
  const [hasMore, setHasMore] = useState(true);
  const clients = client()
  const { myUseSelector } = useReduxHook();
  const { executeActions } = useActionForErrorsHook();
  const PAGINATIONDEFAULT = 3;

  const user = myUseSelector((state:RootState) => state?.userLogged);

  const paginationData = (data:Data) => {
    const arrPosts = (data.posts) as Posts

    console.log(arrPosts.data.length)
    if(data.posts.next_page_url == null)  setHasMore(false)

    const newDataPosts = arrPosts.data
    setPosts([...posts, ...newDataPosts])
    setPage(data)
  }

  const fetchPosts = async ({page,url, signal}:PropsFetchData)=>{

    const uri = page == null 
    ? url 
    : ROUTES_API.searchPostsUser(`${user?.entities?.id}`,PAGINATIONDEFAULT,page);
    
    if(uri === null) return  

    const request = signal != undefined 
    ? clients.get(uri,signal)
    : clients.get(uri);


    try {
      const response = await request
      paginationData(response.data)
      console.log(response)
      console.log(posts)
      
    } catch (err) {
      const {status, statusText} =  err as ErrForActions;
      executeActions({status: status, statusText:statusText})
    }
  }

  const acomodarUrl = (url:string|null|undefined) => {
    if(url === null || url === undefined) return null; 
    return url.substring(25,url.length) as EndPointApi
  }

  useEffect(()=>{
    const abortController = new AbortController();
    const signal = abortController.signal;

    fetchPosts({
      page:1,
      url:null,
      signal:signal
    })

    return ()=>{
      abortController.abort();
    }
    
  },[])

  return(
    <>
      <div className=" w-full flex flex-col gap-4">
        {
          <InfiniteScroll
            dataLength={posts.length} //This is important field to render the next data
            next={ () => { 
              fetchPosts({
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
                <div className='flex w-full justify-end mb-3 py-2'>
                  <div className="w-full md:w-[100%] overflow-y-auto">
                      <PostsEnders/>
                  </div>
                </div>
            }
          >
            <div className="flex flex-col gap-4">
              <CreatePost/>
              { 
                posts.map((item) => (
                  <Post key={item.id} data={item}/>
                ))
              }
            </div>
          </InfiniteScroll>
        }
      </div>
    </>
  )
}

export default Feed;

// export const FeedWithoutCreate: React.FC = () => {
//   return (
//     <>
//       <div className=" w-full flex flex-col gap-4">
      
//       {/* <Post/> */}
//       {/* <Post/>
//       <Post/>
//       <Post/>
//       <Post/>
//       <Post/>
//       <Post/>
//       <Post/>
//       <Post/>
//       <Post/>
//       <Post/>
//       <Post/>
//       <Post/>
//       <Post/>
//       <Post/>
//       <Post/>
//       <Post/>
//       <Post/>
//       <Post/>
//       <Post/> */}
      
//     </div>

//     </>
//   )
// }


