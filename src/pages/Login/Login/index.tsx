import Flex from '@/components/Flex';
import Loading from '@/components/Loading';
import Text from '@/components/Text';
import { Button, Input } from 'antd';
import { useState } from 'react';
import { useModel, useNavigate } from 'umi';
import styles from './index.less';

interface LoginProps {
  toLogin?: () => void;
}

const Login = (props: LoginProps) => {
  const { setToken } = useModel('global');
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  function submit() {
    if(loading){
      return;
    }
    setLoading(true);
    setToken('123323')
      .then(() => {
        navigate('/home');
      })
      .catch(() => {
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <Flex
        backgroundColor="#fff"
        flexDirection="column"
        horizontalPadding={50}
        style={{
          width: 400,
          height: 500,
          borderRadius: 8,
          boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
          justifyContent: 'start',
          paddingTop: 32,
        }}
      >
        <div style={{ marginBottom: 60 }}>
          <Flex>
            <Text bold={600} size={28}>
              Login account
            </Text>
          </Flex>
          <Flex style={{ margin: 1 }} verticalPadding={8}>
            <Text size={14} color="#666">
              No account available?
            </Text>
            <Text
              size={14}
              color="#1677ff"
              style={{ cursor: 'pointer' }}
              onClick={() => props.toLogin?.()}
            >
              register
            </Text>
          </Flex>
        </div>

        <Flex>
          <label className={styles.label}>username</label>
          <Input className={styles.userName} />
        </Flex>

        <Flex style={{ marginTop: 42 }}>
          <label className={styles.label}>password</label>
          <Input className={styles.password} />
        </Flex>

        <Flex verticalPadding={32} style={{ width: '100%' }}>
          <Button
            type="primary"
            style={{ width: '100%', height: 45, fontSize: 16,display:'flex',justifyContent:'center',alignItems:'center' }}
            onClick={() => submit()}
          >
            {loading ? <Loading /> : 'login'}
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Login;
