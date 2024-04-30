import HomeIcon from '@mui/icons-material/Home'

import SearchIcon from '@mui/icons-material/Search'
import { IconButton } from '@mui/material'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import { useState } from 'react'
import { DropdownMenu } from '../dropdownmenu/DropdownMenu'
import { Link } from 'react-router-dom'
/* import { Notification } from './notification/Notification' */
import { SUPPORTED_ROUTES } from '../../config'

type Props = {
    navBlock: boolean
}

const Header: React.FC<Props> = ({navBlock}) => {

  const [search, setSearch] = useState(false)

  const searchInputClass = search ? 'flex w-screen px-2 justify-between border-b-2  items-center bg-white border-b-orange-400 absolute top-16 z-50' : 'hidden'

  const navBlockClass = navBlock ? 'hidden' : 'flex gap-8 sm:gap-16 justify-self-center'

  const contentClass = navBlock ? 'grid grid-cols-2 w-full gap-2 items-center justify-between relative sm:w-11/12 xl:w-4/5' : 'grid grid-cols-3 w-full gap-2 items-center justify-between relative sm:w-11/12 xl:w-4/5'

  const handleClik = () => {
    setSearch(!search)
    console.log(search)
  }

  return (
    <>
    <div className='fixed z-40 top-0 left-0 right-0'>
      <header className="flex h-16 justify-center items-center bg-[#fcf2e8] shadow-sm ">

      <div className= {contentClass}>
        <img className='size-16' src="../../src/assets/img/Free_Sample_By_Wix.jpg" alt="" />

        <ul className={navBlockClass}>
          <li>
            <Link to={SUPPORTED_ROUTES.home()}>
              <IconButton color='inherit'>
                  <HomeIcon />
              </IconButton>
            </Link>
          </li>

            
          <li>
            {/* <Notification/> */}
          </li>
          <li className='lg:hidden' onClick={handleClik} >
            <IconButton color='inherit'>
              <SearchIcon/>
            </IconButton>
          </li>
          <li className='hidden lg:flex'>
            
            <Link to='/SavePosts'>
              <IconButton color='inherit'>
                  <BookmarkIcon/>
              </IconButton>
            </Link>
          </li>
        </ul>

        <div className='flex justify-end items-center gap-2'>
          <form id='searchID' className='hidden border-b-2  items-center  border-b-orange-400 lg:flex'>
            <input id='input' className='bg-transparent h-full focus:outline-none' type="text" placeholder="Search"/>
            <IconButton >
              <SearchIcon/>
            </IconButton>
          </form>

          <DropdownMenu/>
        </div>

      </div>
      </header>
      <form id='searchID2' className= {searchInputClass}>
        <input id='input2' className='bg-transparent h-full w-full focus:outline-none' type="text" placeholder="Search"/>
        <IconButton >
          <SearchIcon/>
        </IconButton>
      </form>

    </div>
    
  </>
  )
}

export default Header;