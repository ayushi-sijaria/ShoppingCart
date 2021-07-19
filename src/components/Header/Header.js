import React from 'react'
import { useSelector } from 'react-redux'
import CartImage from '../Assets/shoppingCart.png'

const Header = () => {
     
     const cart = useSelector(state => state.cart)
     let totalQty = 0
     for (const item in cart)
          {
               totalQty+=cart[item].quantity
          }
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
