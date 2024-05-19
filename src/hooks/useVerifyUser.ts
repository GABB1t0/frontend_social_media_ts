import { client } from "../api/client";
import { 
  ROUTES_API as routesApi
} from '../config';
import { ErrForActions } from "../types";
import { useActionForErrorsHook } from "./useActionForErrorsHook";
import { useEffect, useState } from "react";

export const useVerifyUser = () => {
  const clients = client();
  const {executeActions} = useActionForErrorsHook()
  const [verified, setVerified] = useState(false);

  const getVerifyUser = async(signal:AbortSignal)=>{
    try{
      const resVerified = await clients.get(routesApi.userVerified(),signal)
      if(resVerified.data === 204) setVerified(true)
    } catch(e){
      setVerified(false)
      const {status, statusText} = e as ErrForActions
      executeActions({status: status, statusText:statusText})
    }
  }
  
  useEffect(()=>{
    const controller = new AbortController();
    getVerifyUser(controller.signal);
    return () => {
      controller.abort()
    }
  },[])

  return{
    verified
  }
}