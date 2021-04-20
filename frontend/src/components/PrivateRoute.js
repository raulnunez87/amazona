import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    return (
        <Route
            {...rest}
            render={(props) =>
                userInfo ? <Component {...props} /> : <Redirect to="signin" />
            }
        ></Route>
    );
};

export default PrivateRoute;
