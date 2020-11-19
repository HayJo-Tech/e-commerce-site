import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import './Navbar.styles.css';
// import styled from "styled-components";

class MyNavbar extends Component {
  render() {
    return (
      <Navbar variant="dark">
        <Link to="/">
        </Link>
        <Navbar.Brand id="site-name" href="#home">de Cru.</Navbar.Brand>
        <Nav className="mr-auto">
          <DropdownButton className="nav-link" id="dropdown-container" title="Collections">
            <Dropdown.Item id="dd-item" as="button">Spring Collection 2020</Dropdown.Item>
            <Dropdown.Item id="dd-item" as="button">Summer Collection 2020</Dropdown.Item>
            <Dropdown.Item id="dd-item" as="button">Fall Collection 2020</Dropdown.Item>
            <Dropdown.Item id="dd-item" as="button">Winter Collection 2020</Dropdown.Item>
          </DropdownButton>

          {/* <Link to="/" className="nav-link">
            Collections
          </Link> */}
        </Nav>
        <Nav>
        <Link inline to="/cart" className="nav-link">
        Cart 0
      </Link>
      </Nav>
      </Navbar>
    );
  }
}

export default MyNavbar;
