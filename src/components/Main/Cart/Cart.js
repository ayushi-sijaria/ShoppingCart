import React from 'react'
import CartItems from './CartItems/CartItems'
import Products from './Total/Total'

const Cart = (props) => {
     return (
          <div className='Cart'>
               <CartItems cart={props.cart}/>
               <Products/>
          </div>
     )
}

export default Cart
