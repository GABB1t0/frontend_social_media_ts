import { Link } from "react-router-dom"
import { routesProfile } from "../../../types"

type Props = {location : routesProfile}

const NavigationProfile = ({location}:Props) => {
  return (
   <div className="m-auto">
        <ul className='flex flex-row gap-2 text-sm md:self-center md:gap-8 md:text-lg'>
            <li className={
                !location.includes('about') && 
                !location.includes('photos') && 
                !location.includes('friends') 
                ? 'font-semibold  transition text-red-400' 
                :'font-semibold  transition hover:text-red-400' } >
                <Link to=''>Timeline</Link>
            </li>
                        
            <li className={
                location.includes('about') 
                ? 'font-semibold  transition text-red-400' 
                :'font-semibold  transition hover:text-red-400' } >
                <Link to='about'>About</Link>
            </li>

            <li className={
                location.includes('photos') 
                ? 'font-semibold  transition text-red-400' 
                :'font-semibold  transition hover:text-red-400' } >
                <Link to='photos'>Photos</Link>
            </li>

            <li className={
                location.includes('friends') 
                ? 'font-semibold  transition text-red-400' 
                :'font-semibold  transition hover:text-red-400' } >
                <Link to='friends'>Friends</Link>
            </li>  
        </ul>
   </div>
  )
}

export default NavigationProfile