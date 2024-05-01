import FavoriteIcon from '@mui/icons-material/Favorite';

type Props = {description:string}
export const Post = ({ description}:Props) =>{
  return(
    <>
      <article  className="flex flex-col bg-white shadow-lg p-5 rounded-md min-h-40 justify-between">
        <div className="flex items-center gap-2">
          <img src="/src/assets/img/blank-profile-picture.jpg" className="size-9 rounded-full" alt="" />
          <div className="flex flex-col">
            <p className="font-bold text-sm">Gabriel Antuarez</p>
            <span className="opacity-25 text-xs">48 d</span>
          </div>
          
        </div>
        <div>
          <p>{description}</p>
        </div>
        <div className='flex gap-2'>
          <FavoriteIcon  style={{ color: '#fc6232' }}/>
          <span className='text-gray-500 text-sm'>You and 201 people like this</span>
        </div>
      </article>
    </>
  )
}