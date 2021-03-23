/* eslint-disable @typescript-eslint/no-unused-vars */
import { Menu, Button } from 'antd';
import React, { useState } from 'react';
import useWindowDimensions from '../../Window Dimension/useWindowDimensions';
// import './Sidebar.module.scss';
import {
    AppstoreOutlined,
    SettingOutlined,
    MailOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PlusCircleOutlined
} from '@ant-design/icons';
import Sider from 'antd/lib/layout/Sider';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Link } from 'react-router-dom';
import { Footer } from 'antd/lib/layout/layout';
import { ButtonHOC, PlusSvg } from '../index';



const rootSubmenuKeys = ['sub1', 'sub2', 'sub4', 'sub5', 'sub6', 'sub7', 'sub8'];


const Sidebar: React.FC = () => {
    const [openKeys, setOpenKeys] = useState(['sub1', 'sub2', 'sub4', 'sub5', 'sub6', 'sub7', 'sub8']);
    const { width } = useWindowDimensions();
    const onOpenChange = (keys: any) => {
        const latestOpenKey = keys.find((key: any) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    const [collapsed, setcollapsed] = useState(!(width > 500));


    const toggleCollapsed = () => {
        setcollapsed(!collapsed);
    };


    return (
        <div>
            <Sider
                style={{
                    background: 'white',
                    marginLeft: `${width > 1300 ? '2.1em !important' : width > 700 ? '1em' : '0em'
                        }`,
                }}
                trigger={null}
                collapsible
                collapsed={collapsed}
            >
                <div className="logo" />
                <Menu
                    className="list_itms"
                    mode="inline"
                    defaultOpenKeys={['sub1', 'sub2', 'sub4', 'sub5']}
                    onOpenChange={onOpenChange}
                    style={{ height: '80%' }}
                    inlineCollapsed={collapsed}
                >
                    {/* <div
                        style={{
                            position: 'absolute',
                            left: `${collapsed ? '8em' : '20em'}`,
                        }}
                    >
                        {React.createElement(
                            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                            {
                                className: 'trigger',
                                onClick: toggleCollapsed,
                            }
                        )}
                    </div> */}
                    <SubMenu
                        className="menu_items"
                        key="sub1"
                        icon={collapsed ? <MailOutlined /> : ''}
                        title="Super Admin"
                    >
                        <Menu.Item className="sub_items" key="1" >
                            <Link to="/bmv_owner_list" className="slider-sub-menu">
                           BMV Owners 

                           </Link>
                            {collapsed ? (
                                ''
                            ) : (
                                    <span className="plus">
                                        {' '}
                                        <PlusSvg />
                                    </span>
                                )}
                        </Menu.Item>
                        <Menu.Item className="sub_items" key="2">
                            <Link to='/bmv_location_list' className="slider-sub-menu">
                             BMV Locations 
                            </Link>

                            {collapsed ? (
                                ''
                            ) : (
                                    <span className="plus">
                                        {' '}
                                        <PlusSvg />
                                    </span>
                                )}
                        </Menu.Item>
                        <Menu.Item className="sub_items" key="3">
                            <Link to="/token_list"  className="slider-sub-menu">
                                  API Tokens
                                <span style={{ color: '#40623A' }} >
                                    {collapsed ? (
                                        ''
                                    ) : (
                                            <span className="plus">
                                                {' '}
                                                <PlusSvg />
                                            </span>
                                        )}
                                </span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu
                        className="menu_items"
                        key="sub2"
                        icon={collapsed ? <AppstoreOutlined /> : ''}
                        title="Owner"
                    >
                        <Menu.Item className="sub_items" key="4">
                            <Link to='/bmv_owner_list' className="slider-sub-menu">
                                BMV Owner List

                            </Link>
                        </Menu.Item>
                        <Menu.Item
                            className="sub_items"
                            style={{ color: '#40623A' }}
                            key="5"
                        >
                            <Link to="/bmv_owner_form"  className="slider-sub-menu">
                                    BMV Owner Form
                                <span style={{ color: '#40623A' }}>
                                </span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu
                        className="menu_items"
                        key="sub4"
                        icon={collapsed ? <SettingOutlined /> : ''}
                        title="Manager"
                    >
                        <Menu.Item className="sub_items" key="6">

                            <Link to='/bmv_manager_list'  className="slider-sub-menu">
                                BMV Manager List
                            </Link>
                        </Menu.Item>
                        <Menu.Item className="sub_items" key="7">

                            <Link to='/bmv_manager_form' className="slider-sub-menu">
                                BMV Manager Form
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu
                        className="menu_items"
                        key="sub6"
                        icon={collapsed ? <SettingOutlined /> : ''}
                        title="Employee"
                    >
                        <Menu.Item className="sub_items" key="8">
                            <Link to='/bmv_employee_list' className="slider-sub-menu">
                                BMV Employee List
                            </Link>
                        </Menu.Item>
                        <Menu.Item className="sub_items" key="9">
                            <Link to='/bmv_employee_form'  className="slider-sub-menu">

                                BMV Employee Form
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    {/* </Menu> */}
                    <SubMenu
                        className="menu_items"
                        key="sub7"
                        icon={collapsed ? <SettingOutlined /> : ''}
                        title="Vehicle"
                    >
                        <Menu.Item className="sub_items" key="10">
                            <Link to='/bmv_vehicle_list' className="slider-sub-menu">
                                Vehicle List

                            </Link>
                        </Menu.Item>
                        <Menu.Item className="sub_items" key="11">
                            <Link to='/more_details' className="slider-sub-menu">

                                Vehicle Registration Form
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu
                        className="menu_items"
                        key="sub8"
                        icon={collapsed ? <SettingOutlined /> : ''}
                        title="Location"
                    >
                        <Menu.Item className="sub_items" key="12">
                            <Link to='/bmv_location_list'  className="slider-sub-menu">
                                Location List
                            </Link>
                        </Menu.Item>
                        <Menu.Item className="sub_items" key="13">
                            <Link to='/bmv_location_form' className="slider-sub-menu">
                                Location  Form
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>

                {collapsed ? (


                    <ButtonHOC
                        className="logout_collapse_button"
                        border='1px solid #882255'
                        color='#882255'
                        radius='0.4rem'
                        width='8rem'
                    >
                        Logout
                    </ButtonHOC>
                ) : (
                        <Footer style={{ textAlign: 'center', background: 'none' }}>
                            <ButtonHOC
                                className="logout_button"
                                border='1px solid #332288'
                                radius='0.5rem'
                            >
                                Logout
                            </ButtonHOC>

                        </Footer>
                    )}
            </Sider>
        </div>
    );
};

export default Sidebar;
