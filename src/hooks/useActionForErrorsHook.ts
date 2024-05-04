import { useNavigate } from "react-router-dom";
import { errorMessagesApi } from "../utils/errorMessagesApi";
import { deleteCookie, getCookie } from "../utils/cookies";
import { nameCookieSessionApp } from "../config";

type Props = { 
    status: number, 
    statusText: string
}

export const useActionForErrorsHook = () => {
    
    const navigate  = useNavigate();

    const executeActions = ({status, statusText}:Props) => {
        if(status == 404){
            alert('Ha ocurrido un error');
        }

        if(status == 403){
            if(statusText === errorMessagesApi.actionUnauthorized){
                alert(statusText);
            }else if(statusText === errorMessagesApi.errorVerificationEmail){
                //Redireccionar
                setTimeout(() => {
                    navigate('/emailVerification')//Modificar por ruta de verificacion de email
                },1000)
            }
        }
        
        if(status == 401){
            const tkn = getCookie(nameCookieSessionApp);
            if(tkn !== undefined) deleteCookie(nameCookieSessionApp);
            alert('Tu sesion ha expirado');
            window.location.href = '/login';
        }
        
        if(status == 500){
            alert('Estamos presentando problemas, por favor intente mas tarde');
        }
    }

    return {
        executeActions
    }
}