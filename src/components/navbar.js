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

import './navbar.css'

const navbarItem = {
  color: '#B23711',
  fontSize: '115%',
  marginLeft: '35px',
  marginRight: '40px',
  fontWeight: 'bolder'

}

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
            <img src="https://res.cloudinary.com/foyy/image/upload/v1547325121/FCTX_Logo_Red.jpg" style={{ width: 375, heigth: 450, marginTop: 15 }} />
          </a>
          <NavbarBrand href="/">
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <div >
                <UncontrolledDropdown nav inNavbar >
                  <DropdownToggle style={navbarItem} nav caret>
                    Systems
                </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Fire Alarm</DropdownItem>
                    <DropdownItem>Fire Supression + Special Hazards</DropdownItem>
                    <DropdownItem>Extinguishers</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
              <NavItem  >
                <NavLink style={navbarItem} href="/services/">Services</NavLink>
              </NavItem>

              <NavItem >
                <NavLink style={navbarItem} href="/contact/">Contact</NavLink>
              </NavItem>
              <NavItem >
                <NavLink style={navbarItem} href="/payment/">Payment</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
