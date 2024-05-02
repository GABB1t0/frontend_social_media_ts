import NotificationsIcon from '@mui/icons-material/Notifications'
import { IconButton } from '@mui/material';
import { NotificationItem } from './NotificationItem';
import { useState } from 'react';



export const Notification: React.FC = () => { 
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  let notiClass = "hidden"

  open ? notiClass = "absolute flex flex-col gap-4 right-[50%] translate-x-[50%] top-16 bg-white w-[300px] p-4  shadow-lg rounded-md before:absolute before:h-5 before:w-5 before:-top-1 before:right-[50%] before:translate-x-[50%] before:bg-white before:rotate-45 z-[50]"  :  "hidden"


  return (
    <div className="flex items-center justify-center ">
      <div onClick={handleClick}>
        <IconButton color='inherit'>
          <NotificationsIcon/>
        </IconButton>
        
      </div>
      <div className={notiClass} >
        <h3 className=' py-3 font-bold border-b-2 '>Notificaciones</h3>
        
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
      </div> 

      
    </div>
  );
}