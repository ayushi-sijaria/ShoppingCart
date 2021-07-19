import React from 'react'

const CartItem = (props) => {
     return (
          <div>
               <div className='Element'>
                    <span id='Title'>{props.item[0].name}</span><br/>
                    <button onClick={() => props.add(props.item[0].name)}>+</button>
                         { props.quantity }
                    <button onClick={() => props.remove(props.item[0].name)}>-</button>
               </div>
               <span>${props.item[0].price.actual} X { props.quantity }</span>
          </div>
     )
}

export default CartItem
