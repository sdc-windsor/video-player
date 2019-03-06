import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, Button, Label, Input } from 'reactstrap';
  import { MdCloudUpload, MdSearch } from 'react-icons/md'

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
        <Navbar color="light" light expand="md">
          <NavbarBrand className="brand" href="https://fontmeme.com/vimeo-font/">
          <img src="https://fontmeme.com/permalink/190306/41c30725258e006cf97cd3c8d478931e.png" alt="vimeo-font" border="0"/>
          </NavbarBrand>
            <Nav color="light" style={{"width": "-webkit-fill-available"}} navbar>
              <NavItem className="m-1">
                <Button color="success" size="md">Join</Button>
              </NavItem>
              <NavItem className="m-1">
                <Button color="disabled">Log in</Button>
              </NavItem>
              <NavItem className="m-1">
                <Button color="disabled">Pricing</Button>
              </NavItem>
              <NavItem className="m-1">
                <Button color="disabled">Features</Button>
              </NavItem>
              <NavItem className="m-1">
                <Button color="disabled">Watch</Button>
              </NavItem>
              <NavItem className="m-1">
                <Button color="disabled">Stock</Button>
              </NavItem>
              <NavItem className="ml-auto mr-0 mt-1 mb-1">
                <Input
                  className="p-1"
                  type="text"
                  placeholder="search videos">
                </Input>
              </NavItem>
              <NavItem className="m-1">
              <Button className="mr-2 ml-0 pl-0" color="disabled">
                  <MdSearch/>
                </Button>
                <Button color="primary">
                  <MdCloudUpload/>
                  {' Upload'}
                </Button>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    )
  }
}
