import { createStore } from 'redux'

const reducer = (state={cart:[]}, action) =>
{
     switch(action.type)
     {
          case 'ADD': {
               const newProduct = action.payload
               const cart = [...state.cart]
               console.log(cart)
               console.log(newProduct)
               console.log(newProduct.item[0].name)
               const existingItem = cart.find(p => p.item[0].name === newProduct.item[0].name)
               console.log(existingItem)
               if(!existingItem)
               {
                    console.log('Not Existing elememt')
                    console.log(existingItem)
                    cart.push ({
                         ...newProduct,
                         quantity: 1,
                         totalValue: newProduct.item[0].price.actual,
                         totalSP: newProduct.item[0].price.display
                    })
               }
               else
               {
                    console.log('Existing elememt')
                    const newQuantity = existingItem.quantity+1
                    existingItem.quantity = newQuantity
                    const newTotalValue=existingItem.totalValue + newProduct.item[0].price.actual
                    existingItem.totalValue=newTotalValue
                    const newTotalSP=existingItem.totalSP + newProduct.item[0].price.display
                    existingItem.totalSP=newTotalSP
               }
               console.log(cart)
               return {
                    cart
               }
               
          }
          case 'REMOVE': {
               const newProduct = action.payload
               const cart = [...state.cart]
               console.log(cart)
               console.log(newProduct)
               console.log(newProduct.item[0].name)
               const existingItem = cart.find(p => p.item[0].name === newProduct.item[0].name)
               console.log(existingItem)
               console.log('Existing elememt')
               const newQuantity = existingItem.quantity-1
               existingItem.quantity = newQuantity
               const newTotalValue=existingItem.totalValue - newProduct.item[0].price.actual
               existingItem.totalValue=newTotalValue
               const newTotalSP=existingItem.totalSP - newProduct.item[0].price.display
               existingItem.totalSP=newTotalSP               
               console.log(newQuantity)
               if (newQuantity>=1)
               {
                    return {
                         cart
                    }
               }
               else{
                    console.log(cart)
                    const index = cart.indexOf(existingItem)
                    console.log(index)
                    const updatedCart = cart.splice(index, 1)
                    console.log(updatedCart)
                    return { cart }                    
               }
               

          }
          default: return state
     }
}

const store = createStore(reducer)
export default store