import React from 'react'

const CartItem = (props) => {
     console.log(props.item)
     return (
          <div>
               <div className='Element'>
                    <span id='Title'>{props.item[0].name}</span><br/>
                    <button>+</button>{ 1 }<button>-</button>
               </div>
               <span>${props.item[0].price.actual}</span>
          </div>
     )
}

export default CartItem
