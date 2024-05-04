import PersonIcon from '@mui/icons-material/Person'
import ManageSearchIcon from '@mui/icons-material/ManageSearch'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'
import { IconButton } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import { client } from '../../api/client'
import { 
  nameCookieSessionApp, 
  ROUTES_API as routesApi
} from '../../config'
import { deleteCookie } from '../../utils/cookies'
import { useRouter } from '../../hooks/useRouter'
import { removeUser } from '../../app/slices/userLoggedSlice'
import { useDispatch } from 'react-redux'



export const DropdownMenu = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  let menuClass = 'hidden'

  showDropdown ? menuClass = 'bg-white transition duration-150 ease-in-out flex w-52 shadow-lg flex-col gap-2 p-5 absolute top-16 right-2.5 before:absolute before:h-5 before:w-5 before:-top-1 before:right-1 before:bg-white before:rotate-45' : menuClass = 'hidden duration-500 -translate-y-6 ease-out'
  const clients = client()
  const { navigate } = useRouter()
  const dispatch = useDispatch()

  const handleClick = () => {
    setShowDropdown(!showDropdown)
  }

  //logout
  const handleLogout = async () => {
    dispatch(removeUser())
    const res = await clients.post(routesApi.logout())
    deleteCookie(nameCookieSessionApp)
    setTimeout(() => {
      return navigate('/login')
    }, 1000);
  }
  
  return (
    <aside className='flex items-center justify-center'>
      <div >
        <div className='size-12 rounded-full bg-gray-300 flex justify-center items-center ' onClick={handleClick}>
          <IconButton color='inherit' >
            <PersonIcon/>
          </IconButton>
        </div>

        <div className = {menuClass}>
          <h3 className='text-center' >Gabriel Antuarez</h3>
          <hr />
          <ul className='flex flex-col gap-4 my-3'>
            <li className='transition hover:text-[#fc6232] cursor-pointer' >
              <Link to='/profile/1'>
                <PersonIcon/>
                Profile
              </Link>
            </li>              
            <li className='transition hover:text-[#fc6232] cursor-pointer' >
              <ManageSearchIcon />
              Activity
            </li>
            <li className='transition hover:text-[#fc6232] cursor-pointer lg:hidden' >
              <Link to='/SavePost'>
                
                  <BookmarkIcon/>
                  Guardadas
                
              </Link>
            </li>   
          </ul>
          <hr />
          <ul className='flex flex-col gap-4 my-3'>
            <li className='transition hover:text-[#fc6232] cursor-pointer' >
              <SettingsIcon />
              Settings
            </li>
            <li className='transition hover:text-[#fc6232] cursor-pointer' onClick={handleLogout} >
              <LogoutIcon />
              Logout
            </li>
          </ul>
        </div>
      </div>
    </aside>
  )
}
