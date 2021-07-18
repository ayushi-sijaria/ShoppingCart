import React from 'react'
import CartItem from './CartItem/CartItem'
import CartItemHeader from './CartItemHeader/CartItemHeader'

const CartItems = (props) => {
     console.log(props.cart)
     
     

     return (
          <div className='CartItems'>
          <CartItemHeader/>
          {props.cart.map(i => <CartItem key={i.item[0].name} 
                                         item={i.item} 
                                         quantity={i.quantity} 
                                         add={props.add}
                                         remove={props.remove}/>)}
          </div>)

}
export default CartItems