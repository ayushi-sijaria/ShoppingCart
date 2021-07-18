import React from 'react'
import { useSelector } from 'react-redux'
import CartImage from '../Assets/shoppingCart.png'

const Header = (props) => {
     
     const cart = useSelector(state => state.cart)
     let totalQty = 0
     console.log(cart)
     for (const item in cart)
          {
               totalQty+=cart[item].quantity
          }
     console.log(totalQty)
     return (
          <div className='Header'>
               <div className='heading'>
                    All Items
                    <span>{totalQty}</span>
                    <img src= {CartImage} alt='Loading'/>
               </div>
               
          </div>
          )
}

export default Header
