import Flex from '@/components/Flex';
import Text from '@/components/Text';
import { Button, Input } from 'antd';
import styles from './index.less';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import Register from './Register';
import Login from './Login';
import withAuth from '@/components/withAuth/withAuth';
import { useState } from 'react';


const LoginIndex = () => {
 const [activeKey,setActiveKey]= useState('1');
  const items: TabsProps['items'] = [
    {
      key: '2',
      label: 'Tab 1',
      children: <Register toLogin={()=>setActiveKey('2')} />,
    },
    {
      key: '1',
      label: 'Tab 2',
      children: <Login toLogin={()=>setActiveKey('1')} />,
    },
  ];
  
  return (
    <Flex style={{ height: '100vh', background: '#f4f4f4', width: '100%' }}>
      <div>
      <Tabs defaultActiveKey="1" items={items} activeKey={activeKey} tabBarStyle={{display:'none'}}  />
      </div>
    </Flex>
  );
};

export default withAuth(LoginIndex);
