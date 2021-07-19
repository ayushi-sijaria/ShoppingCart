import React from 'react'
import CartItems from './CartItems/CartItems'
import Products from './Total/Total'

const Cart = (props) => {
     const cart = [...props.cart]
     return (
          <div className='Cart'>
               {!cart.length && <p className='Cart_Text'>Start adding item to cart !</p>}
               {cart.length && <CartItems cart={cart} add={props.add} remove={props.remove}/>}
               <Products />
          </div>
     )
}
export default Cart
