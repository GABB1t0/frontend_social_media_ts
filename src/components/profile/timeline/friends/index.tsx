import React, { useEffect, useState } from 'react'
import Panel from '../panel'
import { Link } from 'react-router-dom'
import { client } from '../../../../api/client';
import useReduxHook from '../../../../hooks/useReduxHook';
import { RootState } from '../../../../app/store';
import { useActionForErrorsHook } from '../../../../hooks/useActionForErrorsHook';
import { ErrForActions } from '../../../../types';
import { ROUTES_API as routesApi } from '../../../../config';
import HeaderPanelLoader from '../../../loaders/profile/HeaderPanelLoader';
import Header from './Header';
import { DataData } from '../../../../types/FindFriendsApiResponse';
import Content from './Content';

const Friends = () => {
  const [data, setData] = useState<DataData []>();
  const apiClient = client();
  const { myUseSelector } = useReduxHook();
  const userProfile = myUseSelector((state:RootState) => state.userProfile);
  const { executeActions } = useActionForErrorsHook();
  

  const fetchFriends = async (signal:AbortSignal) => {
    try{
      const res = await apiClient.get(routesApi.findFriends(userProfile?.user?.id),signal);
      setData(res.data)
    }catch(err){
      const {status, statusText} = err as ErrForActions
      executeActions({status,statusText});
    } 
  }

  useEffect(() => {
    const abort = new AbortController();
    fetchFriends(abort.signal);
  },[]);

  return (
    <>
      <Panel>

        {data !== undefined 
        ? <Header total={data?.total}/>
        : <HeaderPanelLoader/>}
        
        {data &&
          data?.data.length > 0
            ? <>{data?.data?.slice(0,9).map(item => <Content key={item.id} data={item}/>)}</>
            : ''
        }
        
      </Panel>
    </>
  ) 
}

export default Friends