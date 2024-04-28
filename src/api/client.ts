import { http } from '../interceptors/axios.interceptor';
import { EndPointApi } from '../types';

export const client = () =>  {
  
  const get = async (endPoint:EndPointApi, signal?:AbortSignal)=> {
    return http.get(endPoint, {signal, timeout:10000})
  }

  const post = async (endPoint:EndPointApi, body?:FormData, signal?:AbortSignal)=> {
    return http.post(endPoint, body, {signal})
  }

  const put = async (endPoint:EndPointApi, body?:FormData, signal?:AbortSignal)=> {
    return http.put(endPoint, body, {signal})
  }

  const del = async (endPoint:EndPointApi, signal?:AbortSignal) => {
    return http.delete(endPoint, {signal})
  }

  return {get, post, put, del}
}