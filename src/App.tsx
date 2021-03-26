// /* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Fragment, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage, EmployeeTable, TokenList, CreateToken, ConsumerSecret, MoreDetailsComponet, Login, TermCondition, PrivateRoute, BMVOwnerList, BMVManagerList, BMVEmployeeList, BMVVehicleList, BMVLocationList, BMVOwnerForm, BMVManagerForm, BMVEmployeeForm, BMVLocationForm, GeorgDownload,ActivatedApp } from './pages/index';
// import Terms from './pages/Terms Condition/Terms';

const App: React.FC = () => {
    const [isAuthenticated] = useState(true);
    return <Fragment>
        <BrowserRouter>
            {/* {isAuthenticated && <Redirect to='/' />} */}

            <Switch>
                <Route exact path='/login'
                    component={Login} />
                <PrivateRoute path='/' isAuthenticated={isAuthenticated} component={HomePage} />
                <PrivateRoute exact path='/all_orders' isAuthenticated={isAuthenticated} component={EmployeeTable} />
                <PrivateRoute exact path='/token_list' isAuthenticated={isAuthenticated} component={TokenList} />
                <PrivateRoute exact path='/new_token' isAuthenticated={isAuthenticated} component={CreateToken} />
                <PrivateRoute exact path='/secrets' isAuthenticated={isAuthenticated} component={ConsumerSecret} />
                <PrivateRoute exact path='/more_details' isAuthenticated={isAuthenticated} component={MoreDetailsComponet} />
                {/* <PrivateRoute exact path='/terms_conditions' isAuthenticated={isAuthenticated} component={TermCondition} /> */}

                <PrivateRoute exact path='/bmv_owner_list' isAuthenticated={isAuthenticated} component={BMVOwnerList} />
                <PrivateRoute exact path='/bmv_owner_form' isAuthenticated={isAuthenticated} component={BMVOwnerForm} />

                <PrivateRoute exact path='/bmv_manager_list' isAuthenticated={isAuthenticated} component={BMVManagerList} />
                <PrivateRoute exact path='/bmv_manager_form' isAuthenticated={isAuthenticated} component={BMVManagerForm} />

                <PrivateRoute exact path='/bmv_employee_list' isAuthenticated={isAuthenticated} component={BMVEmployeeList} />
                <PrivateRoute exact path='/bmv_employee_form' isAuthenticated={isAuthenticated} component={BMVEmployeeForm} />

                <PrivateRoute exact path='/bmv_vehicle_list' isAuthenticated={isAuthenticated} component={BMVVehicleList} />

                <PrivateRoute exact path='/bmv_location_list' isAuthenticated={isAuthenticated} component={BMVLocationList} />
                <PrivateRoute exact path='/bmv_location_form' isAuthenticated={isAuthenticated} component={BMVLocationForm} />
                <PrivateRoute exact path='/GeorgDownload' isAuthenticated={isAuthenticated} component={GeorgDownload} />
                <PrivateRoute exact path='/ActivatedApp' isAuthenticated={isAuthenticated} component={ActivatedApp} />
           
            </Switch>
        </BrowserRouter>
    </Fragment>;

};

export default App;
