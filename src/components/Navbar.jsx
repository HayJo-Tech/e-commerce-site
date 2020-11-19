import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
// import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import logo from "../assets/icons/iconfinder_Credit_Card_2921795.png";
// import styled from "styled-components";

class MyNavbar extends Component {
  render() {
    return (
      <Navbar fixed="top" bg="dark" variant="dark">
        <Link to="/">
          {/* //   https://www.iconfinder.com/icons/2921795/banking_business_credit_card_e-commerce_payment_purchase_transaction_icon */}
          <img src={logo} alt="store" className="navbar-brand"></img>
        </Link>
        <Navbar.Brand href="#home">HayJo Shop</Navbar.Brand>
        <Nav className="mr-auto">
          <DropdownButton className="nav-link" id="dropdown-container" title="Collections">
            <Dropdown.Item as="button">Spring Collection 2020</Dropdown.Item>
            <Dropdown.Item as="button">Summer Collection 2020</Dropdown.Item>
            <Dropdown.Item as="button">Fall Collection 2020</Dropdown.Item>
            <Dropdown.Item as="button">Winter Collection 2020</Dropdown.Item>
          </DropdownButton>

          {/* <Link to="/" className="nav-link">
            Collections
          </Link> */}
        </Nav>
        <Nav>
        <Nav.Link inline to="/cart" className="nav-link">
        Cart 0
      </Nav.Link>
      </Nav>
      </Navbar>
    );
  }
}

export default MyNavbar;
