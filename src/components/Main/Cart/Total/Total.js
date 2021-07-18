import React from 'react'
import { useSelector } from 'react-redux'

const Total = () => {
     const cart = useSelector(state => state.cart)
     console.log(cart)
     let totalCartValue = 0
     {
          for (const item in cart)
          {
               totalCartValue+=cart[item].totalValue
          }
     }
     let totalCartSP = 0
     {
          for (const item in cart)
          {
               totalCartSP+=cart[item].totalSP
          }
     }

     return (
          <div className='Total'>
               <div className='Bill_Head'>Bill Details:</div> 
               <div>
                    <p className='Display_Price'>Total Listed Price: <br/>${totalCartSP}</p>
                    <p className='Discount'>Discount: <br/>${totalCartSP-totalCartValue}</p>
                    <p className='Billing_Amount'>Billing Amount: <br/>${totalCartValue}</p>

               </div>
          </div>
     )
}

export default Total
