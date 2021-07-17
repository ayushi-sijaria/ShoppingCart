import React from 'react'

const CartItemHeader = () => {
     return (
          <div>
               <span style={{color: 'navyblue', fontWeight: 'bold'}}>Cart Items:</span>
               <p className='CartItemHeader'><span>Item</span><span>Price</span></p>
          </div>
     )
}

export default CartItemHeader
