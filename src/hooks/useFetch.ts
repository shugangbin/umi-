import { useRequest } from 'umi';

export function useFetch(promiseFuc:any) {
  const { data, loading, error } = useRequest(promiseFuc);
  return {
    data,
    loading,
  };
}
