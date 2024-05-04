
import { useGetUserRecommended } from "../../hooks/useGetUserRecommended";
import InfoComponent from "./InfoComponent"

import React from "react";


interface people{
  email: string,
  id: number,
  lastname: string,
  name: string,
  url_image_profile: string | null

}


export const RecommendedPeople: React.FC =()=>{
  const max_items = 4;

 const {people} = useGetUserRecommended()

 
      

  return(
    <InfoComponent titulo="Personas recomendadas">
      {
        people.map((person: people,index:number) => (
          index < max_items &&
          <li key={person.id} className="flex  gap-2 justify-center self-start">
            <img src={person.url_image_profile ? person.url_image_profile : '../../../src/assets/img/blank-profile-picture.jpg'} alt="" className="size-9 rounded-full" />
            <div className="flex self-center">
              <h3 className="font-bold text-sm w-[125px] whitespace-nowrap overflow-hidden text-ellipsis">{person.name} {person.lastname}</h3>
              
            </div>
          </li>
        ))  
        
      }
    </InfoComponent>
    
  ) 
}