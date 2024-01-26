import { Navigate } from 'umi'

/**
 * 权限校验
 * @param Component 组件
 * @returns 
 */
const withAuth = (Component:any) => ()=>{
 // const { isLogin } = useAuth();
  if (true) {
    return <Component />;
  } else{
    return <Navigate to="/login" />;
  }
}

export default withAuth;