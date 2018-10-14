import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const navigationBar = props => (
  <Navbar color="inverse" light expand="md">
    <NavbarBrand href="#">
      <img
        src={require("./../../assets/TokenVitalityLogo.png")}
        alt="TokenVitalityLogo"
      />
    </NavbarBrand>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink
          href="https://github.com/Szczerbo/token-vitality.git"
          target="_blank"
        >
          GitHub
        </NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);

export default navigationBar;
