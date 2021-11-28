import React, {useEffect, useState} from 'react';
import './App.scss';
import DashboardPage from "./pages/dashboard/Dashboard";
import SettingsPage from "./pages/settings/Settings";
import LoginPage from "./pages/login/Login";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "./rootReducer";

function App() {
    const [userType, setUserType] = useState('guest');
    const {authData} = useSelector((state: RootState) => state.login);

    useEffect(()=>{
        setUserType(authData.credential?.accessToken ?'admin':'guest')
    },[authData])

  return (
        <div className="App">
            <Router>
                <Switch>
                    {userType === 'guest' ?
                        <Route exact component={LoginPage} />
                        :
                        <>
                            <Route exact path='/' component={DashboardPage} />
                            <Route path="/settings" component={SettingsPage} />
                        </>
                    }
                </Switch>
            </Router>
        </div>
  );
}

export default App;
