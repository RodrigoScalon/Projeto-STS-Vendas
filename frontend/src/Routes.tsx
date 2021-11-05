import Dashboard from "pages/Dashboard";
import Home from "pages/home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
            </Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
        </BrowserRouter>

    );
}

export default Routes;