import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Col,
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from "reactstrap";
import "./header.css";

const Header = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 576);

  useEffect(() => {
    window.addEventListener("resize", () =>
      setDesktop(window.innerWidth > 576)
    );
  }, []);

  return (
    <Navbar
      expand="sm"
      className="navbar-light bg-white topbar mb-4 static-top shadow py-0"
    >
      <NavbarBrand>
        <NavLink tag={Link} to="/" className="navPointer">
          <h1 className="monterey-text py-0 brandText">chanzero</h1>
        </NavLink>
      </NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar className="w-100">
          {isDesktop ? (
            <>
              <NavItem className="d-flex align-items-center px-4 styleBlack">
                <NavLink tag={Link} to="/about" className="navPointer">
                  About
                </NavLink>
              </NavItem>

              <NavItem className="d-flex align-items-center">
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret className="styleBlack">
                    Collections
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <NavLink tag={Link} to="/collections/rocky-mountain-high">
                        Rocky Mountain High
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem disabled>
                      <NavLink disabled to="/collections/homestead">
                        Homestead
                      </NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>

              <NavItem className="ml-auto">
                <Button outline color="default">
                  Connect Wallet
                </Button>
              </NavItem>
            </>
          ) : (
            <Container fluid className="px-0 d-flex align-items-start">
              <Col xs={10} className="px-0">
                <NavItem className="d-flex align-items-center">
                  <NavLink>About</NavLink>
                </NavItem>
                <NavItem className="d-flex align-items-center">
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Collections
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>
                        <NavLink className="navLinkText">
                          Rocky Mountain High
                        </NavLink>
                      </DropdownItem>
                      <DropdownItem>
                        <NavLink className="navLinkText">Homestead</NavLink>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </NavItem>
              </Col>
              <Col xs={2} className="px-0 pt-2 d-flex justify-content-center">
                <span onClick={() => setIsOpen(!isOpen)}>
                  <FontAwesomeIcon icon={faTimes} color="black" />
                </span>
              </Col>
              <Col xs={12} className="px-0 pt-4 d-flex justify-content-center">
                <NavItem className="w-100">
                  <Button outline color="default" className="w-100">
                    Connect Wallet
                  </Button>
                </NavItem>
              </Col>
            </Container>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
