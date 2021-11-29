import React, {useEffect} from 'react';
import './App.scss';
import {
    Router,
    Switch,
    Route
} from "react-router-dom";
import history from "./history";
import {accessToken} from "./constants/constants";
import {reLogin} from "./pages/Login/LoginActions";
import {useDispatch} from "react-redux";
import {LoginPage, DashboardPage, SettingsPage} from "./pages";
import {Layout, PrivateRoute} from "./components";
import {pageUrls} from "./constants/pageUrls";

function App() {
    const dispatch = useDispatch();
    useEffect(()=> {
        const token = localStorage.getItem(accessToken);
        if(token){
            dispatch(reLogin(token));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return (
        <div className="App">
            <Router history={history}>
                <Switch>
                    <Route path={pageUrls.login} exact component={LoginPage} />
                    <Layout>
                        <PrivateRoute exact path={pageUrls.home}><DashboardPage/></PrivateRoute>
                        <PrivateRoute exact path={pageUrls.settings}><SettingsPage/></PrivateRoute>
                    </Layout>
                </Switch>
            </Router>
        </div>
  );
}

export default App;
