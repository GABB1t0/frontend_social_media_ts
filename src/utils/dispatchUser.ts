
import { client } from "../api/client";
import { 
  ROUTES_API as routesApi
} from '../config';
import useReduxHook from "../hooks/useReduxHook";
import { addUser } from "../app/slices/userLoggedSlice";
import { useActionForErrorsHook } from "../hooks/useActionForErrorsHook";
import { useDispatch } from "react-redux";



type ErrForActions = {
  status:number,
  statusText:string
}

export const dispatchUser = async() => {
  const clients = client();
 /*  const navigate = useNavigate(); */
  const dispatch = useDispatch()
  const {executeActions} = useActionForErrorsHook()
  


    try{
      const resVerified = await clients.get(routesApi.userLogged())
      console.log(resVerified)
      dispatch(addUser(resVerified.data))
      

    } catch(e){
      
      console.log(e)
      const {status, statusText} = e as ErrForActions
      executeActions({status: status, statusText:statusText})

    }
}