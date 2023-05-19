import React from "react";
import { useState } from "react";
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = props => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <Navbar color="primary" dark expand="md">
        <Container>
          <NavbarBrand>Survey Website</NavbarBrand>
          <NavbarToggler onClick={() => setNavbarOpen(!navbarOpen)} />
          <Collapse isOpen={navbarOpen} navbar>
            <Nav className="me-auto" navbar></Nav>
          </Collapse>
        </Container>
      </Navbar>
      <Container>Survey will go here!</Container>
    </>
  );
};

export default Application;
