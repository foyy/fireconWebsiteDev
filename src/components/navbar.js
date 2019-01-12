import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import Image from '../components/imageComponents/image'

import './navbar.css'

export default class Example extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <div>
        <Navbar color="#FFFFFF" light expand="md">
          <a href="/" className="navbar-left">
            <img src="https://res.cloudinary.com/foyy/image/upload/v1547325121/FCTX_Logo_Red.jpg" style={{ width: 275, heigth: 225, marginTop: 15 }} />
          </a>

          <NavbarBrand href="/">
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="navbar items" >
                <NavLink href="/services/">Services</NavLink>
              </NavItem>
              <NavItem className="navbar items">
                <NavLink href="/about/">About</NavLink>
              </NavItem>
              <NavItem className="navbar items">
                <NavLink href="/contact/">Contact</NavLink>
              </NavItem>
              <NavItem className="navbar items">
                <NavLink href="/payment/">Payment</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

// IF I NEED A DROPDOWN MENU:
{
  /* <UncontrolledDropdown nav inNavbar>
  <DropdownToggle nav caret>
    Options
                </DropdownToggle>
  <DropdownMenu right>
    <DropdownItem>Option 1</DropdownItem>
    <DropdownItem>Option 2</DropdownItem>
    <DropdownItem divider />
    <DropdownItem>Reset</DropdownItem>
  </DropdownMenu>
</UncontrolledDropdown> */
}
