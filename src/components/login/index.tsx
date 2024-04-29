import  InputSession  from "../input/InputSession";
import { client } from "../../api/client";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { setCookie } from "../../utils/cookies";
import { 
  SUPPORTED_ROUTES,
  nameCookieSessionApp, 
  ROUTES_API as routesApi
} from '../../config';
import { Data } from "../../types/LoginApiResponse";
import { useRouter } from "../../hooks/useRouter";
import { useVerifySession } from "../../hooks/useVeriySession";
import { actionsForErrors } from "../../utils/actionsForErrors";

const TemplateLogin = () => {

    const { searchingToken } = useVerifySession();
    const [error, setError] = useState<string[]>([]);
    const apiClient = client();
    const { navigate } = useRouter()
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        await apiClient.post(routesApi.login(), formData)
        .then(response => {
            const data = response.data as Data;
            const token = data.token;
            setCookie(nameCookieSessionApp,token,1000);
            navigate('/');
        })
        .catch(err => {
            if(err?.status === 422){
                if(error.length > 0) setError([])
                const errors = err?.errors?.email[0];
                setError([...error,errors]);
                return;
            }
            const { status, statusText } = err;
            actionsForErrors({status: status, statusText:statusText})
        });
    }

    return(
        <>
            { searchingToken &&
                <div>
                    <div className="h-screen w-full flex flex-col justify-center items-center gap-4 bg-gray-100">
                        {
                            error.length > 0 && 
                                <div className="flex justify-center items-center w-72 h-14 text-sm text-red-500 bg-white border-2 border-gray-200">
                                    <p>{error[0]}</p>
                                </div>
                        }
                        
                        <div className="bg-white w-72 h-72 flex flex-col justify-center gap-4 rounded shadow-md">
                            <p className="text-2xl font-bold text-center">Iniciar Sesion</p>
                            <form onSubmit={handleSubmit} className="flex flex-col justify-center w-4/5 mx-auto gap-4">
                                <div className="flex flex-col gap-3">
                                    
                                    <InputSession 
                                        name="email" 
                                        type="email" 
                                        required={true}>Correo</InputSession>
                                    
                                    <InputSession 
                                        name="password" 
                                        type="password" 
                                        required={true}>Contraseña</InputSession>
                                </div>
                                <button type="submit" className="bg-[#fc6232] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" >Iniciar Sesion</button>
                                <p className="text-center">No tienes cuenta? <Link to={SUPPORTED_ROUTES.signUp()} className="text-[#fc6232]">Registrate</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default TemplateLogin;