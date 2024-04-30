import { client} from "../../api/client";
import  InputSession  from "../input/InputSession";
import { Link } from "react-router-dom";
import { 
  SUPPORTED_ROUTES,
  nameCookieSessionApp,
  ROUTES_API as routesApi
} from "../../config";
import { setCookie } from "../../utils/cookies";
import { useState } from "react";
import { useRouter } from "../../hooks/useRouter";
import { Data } from "../../types/LoginApiResponse";
import { useVerifySession } from "../../hooks/useVeriySession";
import { useActionForErrorsHook } from "../../hooks/useActionForErrorsHook";
import { errorMessagesApi } from "../../utils/errorMessagesApi";

type ErrorState = {
    name:string,
    lastname:string,
    email:string,
    password:string,
}

const initialStateError:ErrorState = {
    name: '',
    lastname:'',
    email:'',
    password:'',
}

type ErrForActions = {
    status:number,
    statusText:string
}

const TemplateSignUp = () => {
  
  const { searchingToken } = useVerifySession();
  const apiClient = client();
  const [error, setError] = useState(initialStateError);
  const { navigate } = useRouter();
  const { executeActions } = useActionForErrorsHook();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const res = await apiClient.post(routesApi.signUp(), formData);
      const  data  = res.data as Data;
      const { token } = data;
      setCookie(nameCookieSessionApp,token,1000);
      navigate('/');
    } catch (err) {
        if(err?.status === 422){
            //Recuperamos los errores devueltos por la api
            const errors = err?.errors;
            //Creamos un nuevo objeto error con el estado inicial de errores
            const newObjErrors = {...initialStateError};
            
            //Modificamos las propiedades del nuevo objeto de error con los errores devueltos por la api
            for (const key in errors) {
                if (Object.prototype.hasOwnProperty.call(errors, key)) {
                    const element = errors[key][0];
                    newObjErrors[key] = element; 
                }
            }
            //seteamos el nuevo objeto error.
            setError(newObjErrors);
            return;
        }
        const { status, statusText } = err as ErrForActions;
        executeActions({status: status, statusText:statusText})
    }
  }

  return (
    <>
        { searchingToken &&
            <div className="h-screen w-full flex justify-center bg-gray-100">
                <div className="bg-white w-72 h-fit flex flex-col  mx-auto my-auto justify-center gap-4">
                    <p className="text-2xl font-bold text-center pt-2">Registrarse</p>
                    <form onSubmit={handleSubmit} className="flex flex-col justify-center w-4/5 mx-auto gap-4">
                        <div className="flex flex-col gap-3">
                            <InputSession name="name" type="text" placeholder="Ingrese Nombre" required={false} />
                            { error.name.length > 0 && <span className="text-red-500 text-sm">{error.name}</span>}
                            <InputSession name="lastname" type="text" placeholder="Ingrese Apellido" required={false} />
                            { error.lastname.length > 0 && <span className="text-red-500 text-sm">{error.lastname}</span>}
                            <InputSession name="email" type="email" placeholder="Ingrese Correo" required={false} />
                            { error.email.length > 0 && <span className="text-red-500 text-sm">{error.email}</span>}
                            <InputSession name="password" type="password" placeholder="Ingrese Contraseña" required={false} />
                            { error.password.length > 0 && <span className="text-red-500 text-sm">{error.password}</span>}
                            <InputSession name="password_confirmation" type="password" placeholder="Confirmar Contraseña" required={false} />
                            { (error.password.length > 0 && error.password !== errorMessagesApi.passwordRequired)  && <span className="text-red-500 text-sm">{error.password}</span>}
                        </div>
                        <button 
                            type="submit" 
                            className="bg-[#fc6232] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" >
                            Registrarse
                        </button>
                        <p className="text-center pb-2">Ya tienes cuenta?<span> </span>  
                            <Link to={SUPPORTED_ROUTES.login()} className="text-[#fc6232]">
                                Inicia Sesion
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        }
    </>
  );
}

export default TemplateSignUp;