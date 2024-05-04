import  Header  from "../header/Header";
import { 
  ROUTES_API as routesApi
} from '../../config';
import { client } from "../../api/client";

const TemplateEmailVerification: React.FC = () => {
  const clients = client();

  const handleClick = async() => {
    console.log('click');
    const response = await clients.post(routesApi.verificationEmailSend());
    //response json
    const data  = response.data    
    console.log(data)
  }

  return (
    <>
      <Header navBlock={true} />
      <div className="mt-20 bg-white py-3 flex flex-col mx-auto w-[90%] px-2 ">
        <div>   
          <h1 className="font-bold text-xl border-b-2 border-orange-400 pb-3">Email Verification</h1>
        </div>
        <div className="pt-3">
          <p className="opacity-50">Revisa tu correo electronico <b>correo@gmail.com</b> para verificar tu cuenta .</p>
          <p className="opacity-50">Si no has recibido un correo de verificacion, ingresa en tu carpeta de span o <a  onClick={handleClick} className="font-bold hover:cursor-pointer hover:text-gray-400">Reenviar correo</a>.</p>
          <br />
          <p className="opacity-50">Gracias por usar nuestro servicio.</p>
          <p className="opacity-50">Saludos, GM</p>
        </div>
      </div>
    </>
  );
}

export default TemplateEmailVerification;