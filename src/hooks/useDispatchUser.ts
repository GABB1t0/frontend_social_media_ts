
import { client } from "../api/client";
import { 
  ROUTES_API as routesApi
} from '../config';
import useReduxHook from "./useReduxHook";
import { addUser } from "../app/slices/userLoggedSlice";
import { useActionForErrorsHook } from "./useActionForErrorsHook";
import { useEffect, useState } from "react";
import { RootState } from "../app/store";


type ErrForActions = {
  status:number,
  statusText:string
}

export const useDispatchUser = () => {
  const clients = client();
 /*  const navigate = useNavigate(); */
  const {dispatch, myUseSelector} = useReduxHook()
  const {executeActions} = useActionForErrorsHook()
  const controller = new AbortController();
  const userLogged = myUseSelector((state:RootState) => state?.userLogged);

  

  const setDataUser = async(signal:AbortSignal)=>{
    try{
      const resVerified = await clients.get(routesApi.userLogged(),signal)
      console.log(resVerified)
      dispatch(addUser(resVerified.data))
      

    } catch(e){
      
      console.log(e)
      const {status, statusText} = e as ErrForActions
      executeActions({status: status, statusText:statusText})

    }
  }

  useEffect(()=>{
    let abortController = null;
    if(userLogged?.entities === undefined){
      abortController = new AbortController();
      const signal = abortController.signal;
      setDataUser(signal)
    }

    return () => {
      abortController?.abort()
      }
   
  },[])
  
  


}