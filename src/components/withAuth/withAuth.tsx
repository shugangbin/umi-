import {
  Navigate,
  useLocation,
  useModel,
  useNavigate,
  useSearchParams,
} from 'umi';

const LOGIN = '/login';
/**
 * 权限校验
 * @param Component 组件
 * @returns
 */
const withAuth = (Component: any) => () => {
  // const { isLogin } = useAuth();
  const { token } = useModel('global');
  // const [searchParams, setSearchParams] = useSearchParams();
  const { pathname } = useLocation();
  let navigate = useNavigate();
  // window.location.href
  console.log({token, location,}, 999);
  if (!token) {
    //未登录且已处于登录页面
    if (pathname === LOGIN) {
      return <Component />;
    }
    return <Navigate to="/login" />;
  }
  //已登录未处于登录页面
  if (!!token) {
    return <Component />;
  }
  //已登录但是未退出登录，返回页面
  if (!!token && pathname === LOGIN) {
    navigate(-1);
  }
};

export default withAuth;
