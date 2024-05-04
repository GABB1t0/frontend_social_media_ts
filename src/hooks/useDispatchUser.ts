
import { client } from "../api/client";
import { 
  ROUTES_API as routesApi
} from '../config';
import useReduxHook from "./useReduxHook";
import { addUser } from "../app/slices/userLoggedSlice";
import { useActionForErrorsHook } from "./useActionForErrorsHook";
import { useEffect } from "react";

type ErrForActions = {
  status:number,
  statusText:string
}

export const useDispatchUser = () => {
  const clients = client();
 /*  const navigate = useNavigate(); */
  const {dispatch} = useReduxHook()
  const {executeActions} = useActionForErrorsHook()
  const controller = new AbortController();

  const getDataUser = async()=>{
    try{
    const resVerified = await clients.get(routesApi.userLogged())
    dispatch(addUser(resVerified.data))

    } catch(e){
      const {status, statusText} = e as ErrForActions
      executeActions({status: status, statusText:statusText})

    }
  }
  
  useEffect(()=>{
    getDataUser();
    return () => {
      controller.abort()
    }
  },[])
}