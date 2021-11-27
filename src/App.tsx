import React, {useEffect, useState} from 'react';
import './App.scss';
import DashboardPage from "./pages/Dashboard";
import SettingsPage from "./pages/Settings";
import LoginPage from "./pages/Login";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    const [userType, setUserType] = useState('admin');

    useEffect(()=>{
        loginUser();
    },[])

    const loginUser = () => {
        setUserType('guest')
    }

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
