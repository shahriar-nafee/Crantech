import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLanguageData } from "./ThemeContext";
import { useToggle } from "./ThemeContext";

function Topbar() {
  const language = useLanguageData();
  const ToggleLanguage = useToggle();

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
              {language &&
                language.map((item) => (
                  <NavDropdown.Item onClick={ToggleLanguage}>
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
