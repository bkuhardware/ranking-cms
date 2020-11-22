import React from "react";
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'reactstrap';
import ROUTE_PATH from "../../common/constants/routeConstants";
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap/es";

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
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Create Tournament
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                <NavLink href={ROUTE_PATH.CREATE_NATION_LEAGUE_BOARD}>
                                    Nation League
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink href={ROUTE_PATH.CREATE_CUP_BOARD}>
                                    Cup Competition
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink href={ROUTE_PATH.CREATE_DIRECTLY_KNOCKOUT_BOARD}>
                                    Directly Knockout
                                </NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
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