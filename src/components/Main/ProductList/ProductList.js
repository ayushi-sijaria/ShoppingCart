import React from 'react'
import Products from '../../../data/data'
import ProductItem from '../../../UI/ProductItem/ProductItem'

const ProductList = () => {
     return (
          <div>
               <div className='ProductList'>
                    {Products.map(p => <ProductItem product={p}/>)}
               </div>
          </div>
     )
}

export default ProductList

