import React from "react";
import "../components/style/NavBar.css";


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
  Form,
  Input,
  Button,
} from "reactstrap";

import logo from "../assets/logo.png";
import carro from "../assets/shopping-cart.png"
import user from "../assets/account.png"

const NavBar = () => {
  return (
    <div>
      <Navbar  className="nav-color" expand="md">
        <NavbarBrand href="/">
          <img className="foto ml-5" src={logo} alt="logo"></img>
        </NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="ml-4" navbar>
            <NavItem>
              <Form inline className="buscar" >
                <Input type="text" placeholder="Search"  />
                <Button variant="outline-success" className="ml-4">Search</Button>
              </Form>
            </NavItem>
           
          </Nav>
          <NavItem  className="ml-auto">
          <NavbarText className="ml-5 mb-3"><img src={user} alt="carrito"></img></NavbarText>
          <NavbarText ><img src={carro} alt="carrito"></img></NavbarText>
            </NavItem>
    
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
