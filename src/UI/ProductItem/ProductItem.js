import React from 'react'

const ProductItem = (props) => {
     var product = props.product
     var keys = Object.keys(product)
     console.log(keys)
     return (
          <div className='Product'>
               <img src='product.image' alt='Image not available'/>

          </div>
     )
}

export default ProductItem
