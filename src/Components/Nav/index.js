import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

class Example extends Component {
    render() {
        return (
            <div>
                <Navbar style={{ backgroundColor: "#f5f5f5" }} light expand="md">
                    <NavbarBrand href="/">Welcome</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/About">About Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Services">Services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Resources">Resources/ Partners</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Contact">Contact</NavLink>
                        </NavItem>
                    </Nav>


                </Navbar>
            </div >
        );
    }
}

export default Example;