import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import ROUTE_PATH from "./common/constants/routeConstants";
import Dashboard from "./pages/Dashboard";
import BoardDetail from "./pages/BoardDetail";
import Login from "./pages/Login";
import CreateNationLeagueBoard from "./pages/CreateNationLeagueBoard";
import CreateCupBoard from "./pages/CreateCupBoard";
import CreateKnockoutBoard from "./pages/CreateKnockoutBoard";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={ROUTE_PATH.DASHBOARD}>
                    <Dashboard />
                </Route>
                <Route exact path={ROUTE_PATH.CREATE_NATION_LEAGUE_BOARD}>
                    <CreateNationLeagueBoard />
                </Route>
                <Route exact path={ROUTE_PATH.CREATE_CUP_BOARD}>
                    <CreateCupBoard />
                </Route>
                <Route exact path={ROUTE_PATH.CREATE_DIRECTLY_KNOCKOUT_BOARD}>
                    <CreateKnockoutBoard />
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
    );
}

export default Router;