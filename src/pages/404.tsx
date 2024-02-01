import Flex from "@/components/Flex";
import { Button } from "antd";
import { useNavigate, useSearchParams, useModel } from 'umi';

export default function NullRoute() {
  let navigate = useNavigate();
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <img style={{ width: '100%', height: '100%' }} src={require('@/assets/img/404.png')} />
      <Flex>
        <Button type="primary" onClick={()=>navigate('home')}>返回首页</Button>
      </Flex>
    </div>
  );
}
