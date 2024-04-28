import { useNavigate, useRouteError } from "react-router-dom"
import { useEffect } from "react";
import useReduxHook from "../../hooks/useReduxHook";
import { removeUser as removeUserProfile } from "../../app/slices/userProfileSlice";
import {removeUser as removeUserLogged } from '../../app/slices/userLoggedSlice';
type PropsError = { statusText:string, status:number}

const NotFound = () => {
  const error = useRouteError() as PropsError;
  const navigate = useNavigate();
  const { dispatch } = useReduxHook();

  useEffect(() => {
    if(error.status === 401){
      //Reiniciar los estados globales
      dispatch(removeUserProfile());
      dispatch(removeUserLogged());
      //Redireccionar al login
      navigate('/login')
    }
  },[])

  return (
   <>
    {
      error.status !== 401 &&
      <div>
        <h1>Oops!</h1>
        <h2>{error?.status}</h2>
        <p>{error?.statusText}</p>
      </div> 
    }
   </>
  );
}

export default NotFound