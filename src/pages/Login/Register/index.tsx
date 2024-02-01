import Flex from '@/components/Flex';
import Text from '@/components/Text';
import { Button, Input } from 'antd';
import styles from './index.less';

interface RegisterProps {
  toLogin?: () => void;
}

const Register = (props: RegisterProps) => {
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
              create an account
            </Text>
          </Flex>
          <Flex style={{ margin: 1 }} verticalPadding={8}>
            <Text size={14} color="#666">
              Existing account？
            </Text>
            <Text
              size={14}
              color="#1677ff"
              style={{ cursor: 'pointer' }}
              onClick={() => props.toLogin?.()}
            >
              login
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
            style={{ width: '100%', height: 45, fontSize: 16 }}
          >
            register
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Register;
