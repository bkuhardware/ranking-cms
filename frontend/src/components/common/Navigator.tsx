import React from "react";
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'reactstrap';
import ROUTE_PATH from "../../common/constants/routeConstants";

const Navigator = () => {
    return (
        <div>
            <Navbar color="dark" dark>
                <NavbarBrand className="font-weight-bold" href="/">
                    Ranking CMS
                </NavbarBrand>
                <Nav className="mr-auto">
                    <NavItem>
                        <NavLink href={ROUTE_PATH.DASHBOARD}>Dashboard</NavLink>
                    </NavItem>
                </Nav>
                <Nav>
                    <NavItem>
                        <NavLink href={ROUTE_PATH.LOGIN}>Login</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Navigator;