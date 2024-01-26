import { useEffect } from 'react';
import { useNavigate, useSearchParams, useModel } from 'umi';
import withAuth from '@/components/withAuth/withAuth';
import { proxy } from 'valtio';
//import { useFetch } from '@/hooks/useFetch';
//import { getUserInfo } from '@/services/api/user';

import styles from './index{{{ cssExt }}}';

 const {{{name}}}=()=> {
  //路由跳转 navigate(url)
  let navigate = useNavigate();
  //获取路由参数 {}
  //const [searchParams, setSearchParams] = useSearchParams();
  //状态对象
  const state = proxy({ template: null });
  //全局数据
  //const { user } = useModel('userModel');
  //网络请求
  //const { data, loading } = useFetch(getUserInfo);

  useEffect(() => {}, []);

  function other() {}

  return (
    <div className={styles.container}>
      <div className={styles.box}></div>
    </div>
  );
}

export default withAuth({{{name}}});

