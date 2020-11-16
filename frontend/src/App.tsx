import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ROUTE_PATH from "./common/constants/routeConstants";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import BoardDetail from "./pages/BoardDetail";

const App = () => {
    return (
        <div id="app">
            <BrowserRouter>
                <Switch>
                    <Route exact path={ROUTE_PATH.DASHBOARD}>
                        <Dashboard />
                    </Route>
                    <Route exact path={ROUTE_PATH.BOARD_DETAIL}>
                        <BoardDetail />
                    </Route>
                    <Route exact path={ROUTE_PATH.LOGIN}>
                        <Login />
                    </Route>
                    <Redirect path="/" to={ROUTE_PATH.DASHBOARD} />
                </Switch>
            </BrowserRouter>
        </div>
    )
};

export default App;