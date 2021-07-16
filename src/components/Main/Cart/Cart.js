import React from 'react'
import CartItems from './CartItems/CartItems'
import Products from './Products/Products'

const Cart = () => {
     return (
          <div className='Cart'>
               <CartItems/>
               <Products/>
          </div>
     )
}

export default Cart
