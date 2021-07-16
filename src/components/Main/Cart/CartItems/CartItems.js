import React, { Fragment } from 'react'
import CartItem from './CartItem/CartItem'
import CartItemHeader from './CartItemHeader/CartItemHeader'

const CartItems = (props) => {
     console.log(props.cart)
     return (
          <Fragment>
          <CartItemHeader/>
          {props.cart.map(i => <CartItem item={i}
                                   key={i.name}/>)}
          </Fragment>)

}
export default CartItems