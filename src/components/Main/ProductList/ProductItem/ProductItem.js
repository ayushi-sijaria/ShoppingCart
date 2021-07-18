import React from 'react'
import Badge from '../../../../UI/Badge/Badge'

const ProductItem = (props) => {
     var product = props.product
     
     return (
          <div className='Product'>
               <p className='Title'>{product.name}</p>
               <Badge discount={product.discount}/>
               <img src='product.image' alt='Image not available'/>
               <div className='ProductFooter'>
                    <p><span className='DisplayPrice'>${product.price.display}</span>
                       <span className='ActualPrice'>${product.price.actual}</span></p>
               </div>
               <button onClick={() => props.add(product.name)}>Add to cart</button>
          </div>
     )
}

export default ProductItem
