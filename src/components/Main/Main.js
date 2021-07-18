import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cart from './Cart/Cart'
import data from '../../data/product.json'
import ProductList from './ProductList/ProductList'

const Main = () => {
     const cart = useSelector(state => state.cart)
     console.log(cart)
     const dispatch = useDispatch()
     
     const addToCartHandler = (name) =>
     {
          const item = data.items.filter(p => p.name===name)  
          dispatch({type:'ADD', payload:{item}})
     }
     const removeFromCartHandler = (name) =>
     {
          const item = data.items.filter(p => p.name===name)  
          dispatch({type:'REMOVE', payload:{item}})
     }
     return (
          <div className='Main'>
               <ProductList data={data} add={addToCartHandler}/>
               <Cart cart={cart} add={addToCartHandler} 
                                        remove={removeFromCartHandler}/>
          </div>
     )
}

export default Main
