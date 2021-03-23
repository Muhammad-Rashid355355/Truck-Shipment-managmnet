/* eslint-disable eqeqeq */
import React, { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { EmployeeTable, EditableTable, CreateToken, ConsumerSecret, MoreDetailsComponet, HomePageTable, BMVEmployeeList, BMVManagerList, BMVVehicleList, BMVOwnerList, BMVLocationList, BMVLocationForm, BMVOwnerForm, BMVEmployeeForm, BMVManagerForm,GeorgDownload } from '../index';

const ContentRoutingPage: React.FC = () => {
    const location = useLocation();

    return (
        <Fragment>
            {/* {location.pathname == '/all_orders' ? (<EmployeeTable />) : location.pathname == '/token_list' ? (<EditableTable />) :
                location.pathname == '/new_token' ? (<CreateToken />) :
                    location.pathname == '/secrets' ? (<ConsumerSecret />) :
                        location.pathname == '/more_details' ? (<MoreDetailsComponet />) :
                            (<HomePageTable />)
            } */}
            {location.pathname == '/all_orders' ? (<EmployeeTable />) : location.pathname == '/token_list' ? (<EditableTable />) :
                location.pathname == '/new_token' ? (<CreateToken />) :
                    // location.pathname == '/terms_conditions' ? (<TermCondition />) :
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
                                                            location.pathname == '/GoergDownload'  ? (<GeorgDownload/>) :
                                                                (<HomePageTable />)
            }

        </Fragment>
    );
};

export default ContentRoutingPage;
