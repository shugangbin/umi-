import { useEffect, useState } from 'react';

export function useLocalStorage(key?: string) {
  const [value, setValue] = useState<any>({});

  useEffect(() => {
    if (key) {
      const localValue = localStorage.getItem(key);
      if (localValue) {
        setValue(JSON.parse(localValue));
      }
    }
  }, []);

  function setLocal(key:string,value:any){
    localStorage.setItem(key,JSON.stringify(value));
  }

  return {
    value,
    setLocal,
  };
}
