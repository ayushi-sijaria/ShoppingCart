import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cart from './Cart/Cart'
import data from '../../data/product.json'
import ProductList from './ProductList/ProductList'

const Main = () => {
     const cart = useSelector(state => state.cart)
     const dispatch = useDispatch()
     const addToCartHandler = (name) =>
     {
          const item = data.items.filter(p => p.name===name)  
          dispatch({type:'ADD', payload:{item}})
     }
     return (
          <div className='Main'>
               <ProductList data={data} add={addToCartHandler}/>
               <Cart cart={cart}/>
          </div>
     )
}

export default Main
