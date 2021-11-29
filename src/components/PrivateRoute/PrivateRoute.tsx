import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../rootReducer";
import {Redirect, Route} from "react-router-dom";
import {RouteProps} from "react-router";

type Props = {

} & RouteProps;

const PrivateRoute: React.FC<Props> = ({ children, ...rest }) => {
    const {authData} = useSelector((state: RootState) => state.login);
    const accessToken = authData.credential?.accessToken;
    return (
        <Route
            {...rest}
            render={({ location }) => {
                return accessToken ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/Login",
                            state: {from: location}
                        }}
                    />
                )
            }
            }
        />
    );
}

export default PrivateRoute;