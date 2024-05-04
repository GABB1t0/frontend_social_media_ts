/* eslint-disable react/prop-types */
import MenuIcon from '@mui/icons-material/Menu';
import StyleMenuSecundary from './MenuSecundary.module.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';

interface MenuSecundaryProps {
  section : string | undefined

}
const MenuSecundary: React.FC<MenuSecundaryProps> = ({section}) =>{
  
  const listAbout: { [key: string]: JSX.Element } = {
    'Facebook': <FacebookIcon />,
    'Twitter': <TwitterIcon />,
    'Google': <GoogleIcon />,
    'Pinterest': <PinterestIcon />
  };

  
  
  
  

  const listPhotos = ['All', 'Timeline', 'Upload', 'Folder'];

  const listFriends = ['All', 'Recently', 'Relative', 'Collage', 'Request'];

  const listItem = () => {
    if(section === 'About'){

      return Object.entries(listAbout).map(([key,value]) => (<li key={key}><a href="#">{value}</a></li>));

    }else if(section === 'Friends'){

      return listFriends.map((item) => (<li key={item}><a href="#">{item}</a></li>));

    }else{
      return listPhotos.map((item) => (<li key={item}><a href="#">{item}</a></li>));
    }
  };
    
  return(
    <>
      <div className={ section=='About' ?  `${StyleMenuSecundary.menu_containerAbout}` : `${StyleMenuSecundary.menu_container}`} >

        <p>{section}</p>

        <ul className= {StyleMenuSecundary.list_option}>
          {listItem()}

        </ul>
        {section == 'About' && 
        <button>
          <MenuIcon/>
        </button> }
            
      </div>
    </>
  );
};

export default MenuSecundary;