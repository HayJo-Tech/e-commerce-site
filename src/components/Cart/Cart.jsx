import React, { Component } from 'react'
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';

class Cart extends Component {
  render () {
    return (
      <section>
        <Title name='Your' title='Cart' />
        <CartColumns />
        <EmptyCart />
      </section>
    )
  }
}

export default Cart;
