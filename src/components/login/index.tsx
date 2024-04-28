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
    const [error, setError] = useState();
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
            console.log(err)
            if(err?.status === 422){
                setError(err.errors);
                return;
            }
            const {status, statusText} = error;
            actionsForErrors({status: status, statusText:statusText})
        });

    }
    return(
        <>
        { searchingToken &&
            <div className="h-screen w-full flex justify-center bg-gray-100 ">
            <div className="bg-white w-72 h-96 flex flex-col  mx-auto my-auto justify-center gap-4">
                <p className="text-2xl font-bold text-center">Iniciar Sesion</p>
                <form onSubmit={handleSubmit} className="flex flex-col justify-center w-4/5 mx-auto gap-4">
                <div className="flex flex-col">
                    <label htmlFor="email">Correo Electronico</label>
                    <InputSession 
                        name="email" 
                        type="email" 
                        placeholder="Ingrese Correo" 
                        required={true} />
                    <label htmlFor="password">Contraseña</label>
                    <InputSession 
                        name="password" 
                        type="password" 
                        placeholder="Ingrese Contraseña" 
                        required={true} />
                </div>
                <button type="submit" className="bg-[#fc6232] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" >Iniciar Sesion</button>
                <p className="text-center">No tienes cuenta? <Link to={SUPPORTED_ROUTES.signUp()} className="text-[#fc6232]">Registrate</Link></p>
                </form>
            </div>
            </div>
        }
        </>
    )
}

export default TemplateLogin;