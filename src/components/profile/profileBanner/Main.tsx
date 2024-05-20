import { useEffect, useState } from "react";
import useReduxHook from "../../../hooks/useReduxHook";
import { RootState } from "../../../app/store";
import { client } from "../../../api/client";
import { useActionForErrorsHook } from "../../../hooks/useActionForErrorsHook";
import {
  ROUTES_API as routesApi
} from '../../../config'
import ButtonShowFriend from "./ButtonShowFriend";
import ButtonAddFriend from "./ButtonAddFriend";
import ParagraphLoader from "../../loaders/profile/ParagraphLoader";

type ErrForActions = {
  status:number,
  statusText:string
}

const Main = () => {
  const [isFriend, setIsFriend] = useState<boolean|undefined>(undefined);
  const { myUseSelector } = useReduxHook();
  const userProfile = myUseSelector((state:RootState) => state?.userProfile);
  const userLogged = myUseSelector((state:RootState) => state?.userLogged)
  const apiClient = client();
  const { executeActions } = useActionForErrorsHook();

  const fetchData = (signal:AbortSignal) => {
    apiClient.get(routesApi.verifyFriendshipRelationship(`${userProfile?.user?.id}`),signal)
      .then(response => {
        const data = response.data.length > 0;
        setIsFriend(data)
      })
      .catch(err => {
        const {status, statusText} = err as ErrForActions;
      executeActions({status: status, statusText:statusText})
      })
  }
  
  useEffect(() => {
    const abortcontroller = new AbortController()
    fetchData(abortcontroller.signal);
    return () => {
      abortcontroller.abort()
    } 
  },[])

  return (
    <div className='w-full flex justify-center flex-wrap gap-1 md:w-4/5 md:self-center md:items-center md:justify-between'>
      {
        isFriend === undefined
          ? <ParagraphLoader width={120} height={15}/>
          : <p className='sm:text-sm font-semibold md:flex md:text-2xl'>{userProfile?.user?.name} {userProfile?.user?.lastname}</p>
      }
      {
        userLogged?.entities?.id === userProfile?.user?.id
          ? ''
          : isFriend === undefined
            ? ''
            : isFriend
              ? <ButtonShowFriend/>
              : <ButtonAddFriend/>
      }
    </div>
  )
}

export default Main