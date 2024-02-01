import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';
import { useNavigate, useSearchParams,Outlet } from 'umi';
import withAuth from '@/components/withAuth/withAuth';

const HomePage: React.FC = () => {
  // const { name } = useModel('global');
  const nv=useNavigate()
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim('122')} />
        <button onClick={()=>nv('/home/access')}>跳转</button>
        <Outlet />
      </div>
    </PageContainer>
  );
};

export default withAuth(HomePage);
