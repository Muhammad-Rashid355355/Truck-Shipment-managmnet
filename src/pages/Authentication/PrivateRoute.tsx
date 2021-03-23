import React from 'react';
import { Redirect, Route } from 'react-router-dom';


interface ProtectedRouteProps {
    isAuthenticated: boolean,
    component: any;
    path: string,
    exact?: boolean
}

const PrivateRoute: React.FC<ProtectedRouteProps> = ({ component: Component, isAuthenticated, exact, ...rest }) => {
    return (
        <div className="container">
            <Route
                {...rest}
                render={props =>
                    !isAuthenticated ? (<Redirect to="/login" />) : (<Component{...props} />
                    )
                }
            />
        </div>
    );
};



export default PrivateRoute;