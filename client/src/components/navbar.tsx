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
        <h1 className="monterey-text py-0">chanzero</h1>
      </NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar className="w-100">
          {isDesktop ? (
            <>
              <NavItem
                className="d-flex align-items-center px-4"
                style={{ color: "black" }}
              >
                <NavLink tag={Link} to="/about" style={{ cursor: "pointer" }}>
                  About
                </NavLink>
              </NavItem>

              <NavItem className="d-flex align-items-center">
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret style={{ color: "black" }}>
                    Collections
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <NavLink>Rocky Mountain High</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink>Homestead</NavLink>
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
                        <NavLink
                          style={{
                            textDecoration: "none",
                            color: "white !important",
                          }}
                        >
                          Rocky Mountain High
                        </NavLink>
                      </DropdownItem>
                      <DropdownItem>
                        <NavLink
                          style={{
                            textDecoration: "none",
                            color: "white !important",
                          }}
                        >
                          Homestead
                        </NavLink>
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
    // <Navbar color="faded" light>
    //   <NavbarBrand href="/" className="mr-auto">
    //     reactstrap
    //   </NavbarBrand>
    //   <NavbarToggler onClick={() => setIsOpen(!isOpen)} className="mr-2" />
    //   <Collapse isOpen={isOpen} navbar>
    //     <Nav navbar>
    //       <NavItem>
    //         <NavLink href="/components/">Components</NavLink>
    //       </NavItem>
    //       <NavItem>
    //         <NavLink href="https://github.com/reactstrap/reactstrap">
    //           GitHub
    //         </NavLink>
    //       </NavItem>
    //     </Nav>
    //   </Collapse>
    // </Navbar>
  );
};

export default Header;
