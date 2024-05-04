import stylesAbout from './About.module.css';
import Photos from './photos/Photos';
import Friends from './friends/Friends';
import SectionSeparator from './SectionSeparator';
import { useState } from 'react';


const About = () =>{
  type Data = Record<string, string>;

  const [data, setData] = useState<Data>({
    'About me': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo earum totam, deserunt ullam debitis saepe assumenda, repellat eum facilis, corrupti dicta nam! Magnam dolore alias, odit non asperiores nam exercitationem!',
  });

  const info: Record<string, string> = {
    'About me': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo earum totam, deserunt ullam debitis saepe assumenda, repellat eum facilis, corrupti dicta nam! Magnam dolore alias, odit non asperiores nam exercitationem!',

    'Work':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo earum totam, deserunt ullam debitis saepe assumenda, repellat eum facilis, corrupti dicta nam! Magnam dolore alias, odit non asperiores nam exercitationem!',
    
    'Education': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo earum totam, deserunt ullam debitis saepe assumenda, repellat eum facilis, corrupti dicta nam! Magnam dolore alias, odit non asperiores nam exercitationem!',

    'Family': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo earum totam, deserunt ullam debitis saepe assumenda, repellat eum facilis, corrupti dicta nam! Magnam dolore alias, odit non asperiores nam exercitationem!',

    'contact': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo earum totam, deserunt ullam debitis saepe assumenda, repellat eum facilis, corrupti dicta nam! Magnam dolore alias, odit non asperiores nam exercitationem!'
  };

  const handleClick: (item: string) => void = (item) => {
    setData({ [item]: info[item] });
  };
  const getEntries = () =>{
    
    let keys = Object.keys(data);
    console.log(keys);

    let values = Object.values(data);
    console.log(values);

    return [keys, values];
  };
  const [key,val] = getEntries();

  return(
    <>
      <section className={stylesAbout.aboutSection_container}>
        <nav className={stylesAbout.menuOption}>
          <ul>
            <li onClick={()=>handleClick('About me')}>Something About Me</li>
            <li onClick={()=>handleClick('Work')}>Working Zone</li>
            <li onClick={()=>handleClick('Education')}>Educational Qualification</li>
            
            <li onClick={()=>handleClick('Family')}>Friends & Family</li>
            <li onClick={()=>handleClick('contact')}>Contact Details</li>
          </ul>
        </nav>
        <article className={stylesAbout.infoAbout}>
          
          <h3>{key.map(key => key)}</h3>
          <p>{val.map(val=>val)}</p>
                    
        </article>
      </section>   
    </>
  );
};

export default About;