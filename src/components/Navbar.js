import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext";

function Topbar() {
  const { languageData, handleChange } = useTheme();

  return (
    <div>
      <Navbar
        collapseOnSelect
        fixed="top"
        bg="warning"
        variant="light"
        expand="sm"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src="https://www.crantech.xyz/res/crantech.png"
              width="100"
              height="40"
              className="d-inline-block align-top"
              alt="CranTech logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ml-auto">
              <Nav.Link eventKey="0" as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link eventKey="1" as={Link} to="#">
                Products
              </Nav.Link>
              <Nav.Link eventKey="2" as={Link} to="#">
                Offers
              </Nav.Link>
            </Nav>
            <NavDropdown title="Language">
              {languageData &&
                languageData.map((item) => (
                  <NavDropdown.Item onClick={handleChange}>
                    {item}
                  </NavDropdown.Item>
                ))}
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Topbar;
