import React, { Component } from "react";
import ProductCard from "../Product/ProductCard";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";

class Cart extends Component {
  render() {
    return (
      <section>
        <Title title="Shopping Cart" />
        <CartColumns />
        <EmptyCart />
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <ProductCard
                productName="Vest"
                productDescription="V-neck vest. Front patch pockets. Front button closure."
                price="$69.99"
                size="S"
                quantity="1"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Cart;
