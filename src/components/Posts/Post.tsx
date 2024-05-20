import FavoriteIcon from '@mui/icons-material/Favorite';


export const Post = ({ data }) =>{
  return(
    <>
      <article  className="flex flex-col bg-white shadow-lg p-5 rounded-md min-h-40 justify-between">
        <div className="flex items-center gap-2">
          <img src={data?.user?.url_image_profile} className="size-9 rounded-full" alt={`${data?.user?.name} ${data?.user?.lastname}` }/>
          <div className="flex flex-col">
            <p className="font-bold text-sm">{data?.user?.name} {data?.user?.lastname}</p>
            <span className="opacity-25 text-xs">48 d</span>
          </div>
        </div>
        
        <div className='mt-2'>
          <p>{data?.description}</p>
          {
            data?.images[0]?.url &&
              <div className='w-full min-h-72 h-72 rounded-md mt-1 mb-1 p-2 border-2 border-gray-200'>
                <img src={data?.images[0]?.url} alt={data?.description} className='w-full h-full rounded-md object-contain' />
              </div>
          }
        </div>


        <div className='flex gap-2 mt-2 pt-1 pb-1 border-t-2 border-b-2 border-gray-200'>
          <FavoriteIcon  style={{ color: '#fc6232' }}/>
          <span className='text-gray-500 text-sm'>You and 201 people like this</span>
        </div>
        
      </article>
    </>
  )
}