import React, { ReactElement, useState } from 'react';
import { Menu, Button } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import {
  AppstoreOutlined,
  SettingOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { Footer } from 'antd/lib/layout/layout';

const { SubMenu } = Menu;

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
function Sidebar(): ReactElement {
  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange = (keys: any) => {
    const latestOpenKey = keys.find((key: any) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <div>
      <Sider
        style={{
          // overflowY: 'auto',
          height: '100%',
          position: 'fixed',
          left: 0,
          top: '125px'
        }}
      >
        <div className='logo' />
        <Menu
          mode='inline'
          // theme='dark'
          // defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          // openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{ height: '90vh' }}
        >
          <SubMenu key='sub1' icon={<MailOutlined />} title='Super Admin'>
            <Menu.Item key='1'>BMV Owners</Menu.Item>
            <Menu.Item key='2'>BMV Locations</Menu.Item>
            <Menu.Item key='3'>API Tokens</Menu.Item>
          </SubMenu>
          <SubMenu key='sub2' icon={<AppstoreOutlined />} title='Owner'>
            <Menu.Item key='4'>BMV Manager</Menu.Item>
            <Menu.Item key='5'>BMV Employees</Menu.Item>
          </SubMenu>
          <SubMenu key='sub4' icon={<SettingOutlined />} title='Manager'>
            <Menu.Item key='6'>BMV Employees</Menu.Item>
          </SubMenu>
          <SubMenu key='sub5' icon={<SettingOutlined />} title='Employee'>
            <Menu.Item key='7'>Vehicle Registration</Menu.Item>
          </SubMenu>
        </Menu>

        <Footer style={{ textAlign: 'center' }}>
          <Button type='primary'>LOG OUT</Button>
        </Footer>

      </Sider>
    </div>
  );
}

export default Sidebar;

