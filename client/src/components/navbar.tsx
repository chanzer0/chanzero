import React, { ReactElement, useState } from "react";
import {
  Button,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  UncontrolledDropdown,
} from "reactstrap";

const Header = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Navbar
      expand="md"
      className="navbar-light bg-white topbar mb-4 static-top shadow"
    >
      <NavbarBrand>
        <h1 className="monterey-text py-0">chanzero</h1>
      </NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar className="w-100">
          <NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Collections
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Rocky Mountain High</DropdownItem>
                <DropdownItem>Homestead</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavItem>

          <NavItem className="ml-auto">
            <Button outline color="default">
              Connect Wallet
            </Button>
          </NavItem>
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
