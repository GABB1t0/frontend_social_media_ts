import { useEffect, useState } from "react";
import { getCookie } from "../utils/cookies";
import { nameCookieSessionApp } from "../config";
import { useLocation } from "react-router-dom";
import { useRouter } from "./useRouter";
import { SUPPORTED_ROUTES as routes } from "../config";

export const useVerifySession = () => {

  const location = useLocation()
  const [searchingToken, setSearchingToken] = useState(false)
  const { navigate } = useRouter()
  
  useEffect(() => {
      
    if(
      location.pathname === routes.login() && getCookie(nameCookieSessionApp) !== undefined ||
      location.pathname === routes.signUp() && getCookie(nameCookieSessionApp) !== undefined){
      return navigate('/');
    }

    if(getCookie(nameCookieSessionApp) === undefined){
      if( location.pathname === routes.login()  || location.pathname === routes.signUp() ){
        setSearchingToken(true);
        return;
      }
      
      setTimeout(()=>navigate('/login'),1000);
      return;
    }

    setSearchingToken(true);
  },[])
  
  return {
    searchingToken
  }
}