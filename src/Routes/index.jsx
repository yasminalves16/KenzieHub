import { Route, Switch } from "react-router-dom";

import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/signup">
                <Signup />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/dashboard">
                <Dashboard />
            </Route>
        </Switch>
    );
};

export default Routes;
