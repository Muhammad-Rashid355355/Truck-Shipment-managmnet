/* eslint-disable eqeqeq */
import React, { Fragment } from 'react';
import { EmployeeTableHeader, TokenListHeader, TokenPageHeader, Login, HomePageHeader, BMVVehicleHeader } from '../index';


const HeaderRoutingPage: React.FC = () => {
    return (
        <Fragment>
            { location.pathname == '/all_orders' ? (<EmployeeTableHeader />) :
                location.pathname == '/token_list' ? (<TokenListHeader />) :
                    location.pathname == '/bmv_location_list' ? (<BMVVehicleHeader />) :
                        location.pathname == '/new_token' || location.pathname == '/secrets' ? (<TokenPageHeader />) :
                            location.pathname == '/login' ? (<Login />) :
                                <HomePageHeader />}
        </Fragment>
    );
};

export default HeaderRoutingPage;
