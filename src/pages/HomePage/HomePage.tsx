/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eqeqeq */
import React, { Fragment } from 'react';
import Layout, { Content } from 'antd/lib/layout/layout';
import './HomePage.scss';
// import { Sidebar, ContentRoutingPage, HeaderRoutingPage } from '../index';
import { useLocation } from 'react-router-dom';
import { Sidebar, ContentRoutingPage, HeaderRoutingPage, EmployeeTable, EditableTable, CreateToken, TermCondition, ConsumerSecret, MoreDetailsComponet, HomePageTable, BMVOwnerList, BMVManagerList, BMVEmployeeList, BMVVehicleList, BMVLocationList, BMVOwnerForm, BMVManagerForm, BMVEmployeeForm, BMVLocationForm,GeorgDownload,ActivatedApp} from '../index';


const HomePage: React.FC = () => {
    const location = useLocation();
    return (
        <Fragment>
            {/* Header routing section */}

            <HeaderRoutingPage />
            <Layout style={{ background: 'white' }}>
                <Sidebar />
                <Layout className="site-layout">
                    <Content
                        className="site-layout-background"
                        style={{
                            background: 'none',
                            marginLeft: '2.1em'
                        }}
                    >
                        {/* content routing section */}
                        {location.pathname == '/all_orders' ? (<EmployeeTable />) : location.pathname == '/token_list' ? (<EditableTable />) :
                            location.pathname == '/new_token' ? (<CreateToken />) :
                                location.pathname == '/secrets' ? (<ConsumerSecret />) :
                                    location.pathname == '/bmv_employee_list' ? (<BMVEmployeeList />) :
                                        location.pathname == '/bmv_manager_list' ? (<BMVManagerList />) :
                                            location.pathname == '/bmv_owner_list' ? (<BMVOwnerList />)
                                                :
                                                location.pathname == '/bmv_vehicle_list' ? (<BMVVehicleList />)
                                                    :
                                                    location.pathname == '/bmv_location_list' ? (<BMVLocationList />)
                                                        :
                                                        location.pathname == '/bmv_location_form' ? (<BMVLocationForm />)
                                                            :
                                                            location.pathname == '/bmv_owner_form' ? (<BMVOwnerForm />)
                                                                :
                                                                location.pathname == '/bmv_employee_form' ? (<BMVEmployeeForm />)
                                                                    :
                                                                    location.pathname == '/bmv_manager_form' ? (<BMVManagerForm />)
                                                                        :
                                                                        location.pathname == '/more_details' ? (<MoreDetailsComponet />) :
                                                                        location.pathname == '/GeorgDownload'  ? (<GeorgDownload/>) :
                                                                        location.pathname == '/ActivatedApp'  ? (<ActivatedApp/>) :
                                                                          
                                                                        (<HomePageTable />)
                        }
                        {/* <ContentRoutingPage /> */}
                    </Content>
                </Layout>
            </Layout>
        </Fragment>
    );
};

export default HomePage;
