import Flex from '@/components/Flex';
import Text from '@/components/Text';
import { Button, Input } from 'antd';
import styles from './index.less';

const Login = () => {
  return (
    <Flex style={{ height: '100vh', background: '#f4f4f4' }}>
      <div>
        <Flex
          backgroundColor="#fff"
          flexDirection="column"
          horizontalPadding={50}
          style={{
            width: 450,
            height: 300,
            borderRadius: 8,
            boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
          }}
        >
          <Flex>
            <Text bold={600} size={25}>
              创建账户
            </Text>
          </Flex>
          <Flex>
            <Text>已有账户？</Text>
            <Button type="text">登录</Button>
            <Text>登录</Text>
          </Flex>
          <Flex verticalPadding={16}>
            <Input className={styles.userName} />
          </Flex>

          <Flex verticalPadding={0}>
            <Input className={styles.password} />
          </Flex>

          <Flex verticalPadding={32} style={{ width: '100%' }}>
            <Button type="primary" style={{ width: '50%' }}>
              登录
            </Button>
          </Flex>
        </Flex>
        <Flex style={{ backgroundColor: 'rgb(0,8,66)' }}>
          <img src={require('@/assets/img/login_logo.jpg')} />
        </Flex>
      </div>
    </Flex>
  );
};

export default Login;
