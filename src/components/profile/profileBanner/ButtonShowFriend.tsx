import PersonAddIcon from '@mui/icons-material/PersonAdd';

const ButtonShowFriend = () => {
  return (
    <button className= "bg-red-500 w-2/4 rounded-3xl p-1 text-white  gap-3 flex justify-center hover:scale-110 hover:bg-red-600 md:h-8 md:w-28">
      <PersonAddIcon/>
      Friend
    </button> 
  )
}

export default ButtonShowFriend