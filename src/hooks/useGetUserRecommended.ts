import { useEffect, useState } from "react";
import { client } from "../api/client";
import { 
  ROUTES_API as routesApi
} from '../config';

export const useGetUserRecommended = () =>{
  const [people, setPeople] = useState([])
  const clients = client();
  

  
  useEffect(() => {
    const getPeople = async() => {
      try{
  
        const res = await clients.get(routesApi.findUsersToRecommend()).then(res => res.data.data)
        setPeople(res)
        
       
  
      }catch(err){
        console.log(err)
  
      }  
    }
    getPeople()
  },[])

  return {
    people
  };

}