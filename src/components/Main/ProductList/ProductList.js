import React from 'react'
import ProductItem from './ProductItem/ProductItem'

const ProductList = (props) => {     
     return (
          <div>
               <div className='ProductList'>
                    {props.data.items.map(p => <ProductItem product={p} 
                                                    add={props.add}
                                                    key={p.name}/>)}
               </div>
          </div>
     )
}

export default ProductList

