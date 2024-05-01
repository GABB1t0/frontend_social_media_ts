import { useNavigate } from "react-router-dom";
import { errorMessagesApi } from "../utils/errorMessagesApi";

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
                navigate('/profile')//Modificar por ruta de verificacion de email
            }
        }
        
        if(status == 401){
            navigate('/')
        }
        
        if(status == 500){
            alert('Estamos presentando problemas, por favor intente mas tarde');
        }
    }

    return {
        executeActions
    }
}