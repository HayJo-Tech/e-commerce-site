import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { Link } from "react-router-dom";
import logo from "../assets/icons/iconfinder_Credit_Card_2921795.png";

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
          <Link to="/" className="nav-link">
            products
          </Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    );
  }
}

export default MyNavbar;
