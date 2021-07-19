import { createStore } from 'redux'

const reducer = (state={cart:[]}, action) =>
{
     switch(action.type)
     {
          case 'ADD': {
               const newProduct = action.payload
               const cart = [...state.cart]
               const existingItem = cart.find(p => p.item[0].name === newProduct.item[0].name)
               if(!existingItem)
               {
                    cart.push ({
                         ...newProduct,
                         quantity: 1,
                         totalValue: newProduct.item[0].price.actual,
                         totalSP: newProduct.item[0].price.display
                    })
               }
               else
               {
                    const newQuantity = existingItem.quantity+1
                    existingItem.quantity = newQuantity
                    const newTotalValue=existingItem.totalValue + newProduct.item[0].price.actual
                    existingItem.totalValue=newTotalValue
                    const newTotalSP=existingItem.totalSP + newProduct.item[0].price.display
                    existingItem.totalSP=newTotalSP
               }
               return {
                    cart
               }
               
          }
          case 'REMOVE': {
               const newProduct = action.payload
               const cart = [...state.cart]
               const existingItem = cart.find(p => p.item[0].name === newProduct.item[0].name)
               const newQuantity = existingItem.quantity-1
               existingItem.quantity = newQuantity
               const newTotalValue=existingItem.totalValue - newProduct.item[0].price.actual
               existingItem.totalValue=newTotalValue
               const newTotalSP=existingItem.totalSP - newProduct.item[0].price.display
               existingItem.totalSP=newTotalSP
               if (newQuantity>=1)
               {
                    return {
                         cart
                    }
               }
               else{
                    const index = cart.indexOf(existingItem)
                    cart.splice(index, 1)
                    return { cart }                    
               }
          }
          default: return state
     }
}

const store = createStore(reducer)
export default store