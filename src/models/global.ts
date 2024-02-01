// 全局共享数据示例
import { DEFAULT_NAME } from '@/constants';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useState } from 'react';

type Login = {
  newToken: string;
};

const useUser = () => {
  const [name, setName] = useState<string>(DEFAULT_NAME);
  const [token, setToken] = useState<string | null>('');
  const {value,setLocal}=useLocalStorage('token');
  
  console.log('本地',value.token);
  
  function setLogin(v:string) {
    setToken(v);
    setLocal('token',{token:v})
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 3000);
    });
  }
  return {
    name,
    token:token || value.token,
    setName,
    setToken: (v: string) => setLogin(v),
  };
};

export default useUser;
