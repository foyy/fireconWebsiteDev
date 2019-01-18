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
  color: 'rgba(178, 55, 17, .92)',
  fontSize: '120%',
  paddingRight: '1.8rem',
  paddingLeft: '1.8rem',
  fontFamily: 'helvetica, serif'

}

const navbar = {
  top: 0,
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
        <Navbar color="#FFFFFF" light expand="md" style={navbar}>
          <a href="/" className="navbar-left">
            <img src="https://res.cloudinary.com/foyy/image/upload/v1547325121/FCTX_Logo_Red.jpg" style={{ width: 355, heigth: 400, marginTop: 15, marginLeft: 20 }} />
          </a>
          <NavbarBrand href="/">
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem  >
                <NavLink style={navbarItem} href="/systems/">Systems</NavLink>
              </NavItem>
              <NavItem  >
                <NavLink style={navbarItem} href="/services/">Services</NavLink>
              </NavItem>

              <NavItem >
                <NavLink style={navbarItem} href="/contact/">Contact</NavLink>
              </NavItem>
              <NavItem >
                <NavLink style={navbarItem} href="/payment/">Pay Now</NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
