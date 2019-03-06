import React, { Component } from 'react';
import { Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, Button, Label, Input } from 'reactstrap';

export default class MovieNav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div className="MovieNav">
        <Navbar color="light" light expand="sm">
          <NavbarBrand className="brand">Movie</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav color="light" className="ml-auto" navbar>
              <NavItem>
                <Button color="primary">Upload</Button>
              </NavItem>
              <NavItem>
                <Input type="text" placeholder="Search videos,people, and more">

                </Input>
              </NavItem>
              <NavItem>
                <Button color="disabled">Stock</Button>
              </NavItem>
              <NavItem>
                <Button color="disabled">Watch</Button>
              </NavItem>
              <NavItem>
                <Button color="disabled">Features</Button>
              </NavItem>
              <NavItem>
                <Button color="disabled">Pricing</Button>
              </NavItem>
              <NavItem>
                <Button color="disabled">Log in</Button>
              </NavItem>
              <NavItem>
                <Button color="success" size="sm">Join</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
