import { useRouteError } from "react-router-dom"
import { useEffect } from "react";
import { errorMessagesApi } from "../../utils/errorMessagesApi";
import { useActionForErrorsHook } from "../../hooks/useActionForErrorsHook";
type PropsError = { statusText:string, status:number}

const NotFound = () => {
  const error = useRouteError() as PropsError;
  const { executeActions } = useActionForErrorsHook(); 

  useEffect(() => {
    if(error.status == 401 || error.status == 403){
      const { status, statusText } = error;
      executeActions({status: status, statusText: statusText})
    }
  },[])

  return (
   <>
    {
      ( error.status !== 401 && (error.status !== 403 && error.statusText !== errorMessagesApi.errorVerificationEmail)) &&
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