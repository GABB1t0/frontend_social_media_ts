
import { client } from "../api/client";
import { 
  ROUTES_API as routesApi
} from '../config';
import useReduxHook from "./useReduxHook";
import { addUser } from "../app/slices/userLoggedSlice";
import { useActionForErrorsHook } from "./useActionForErrorsHook";
import { useEffect, useState } from "react";



type ErrForActions = {
  status:number,
  statusText:string
}

export const useVerifyUser = () => {
  const clients = client();
  
 /*  const navigate = useNavigate(); */
  const {dispatch} = useReduxHook()
  const {executeActions} = useActionForErrorsHook()
  const controller = new AbortController();
  const [verified, setVerified] = useState(false);

  const getVerifyUser = async()=>{
    try{
      const resVerified = await clients.get(routesApi.userVerified())
      console.log(resVerified)
      
      setVerified(true)

    } catch(e){
      setVerified(false)
      console.log(e)
      const {status, statusText} = e as ErrForActions
      executeActions({status: status, statusText:statusText})

    }
  }
  
  useEffect(()=>{
    getVerifyUser();
    return () => {
      controller.abort()
    }
  },[])

  return{
    verified
  }
}