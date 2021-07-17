import React from 'react'
import CartItem from './CartItem/CartItem'
import CartItemHeader from './CartItemHeader/CartItemHeader'

const CartItems = (props) => {
     console.log(props.cart)
     const finalCart = []

     return (
          <div className='CartItems'>
          <CartItemHeader/>
          {props.cart.map(i => <CartItem key={i.item} item={i.item}/>)}
          </div>)

}
export default CartItems