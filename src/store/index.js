import { createStore } from 'redux'

const reducer = (state={cart:[]}, action) =>
{
     switch(action.type)
     {
          case 'ADD': {
               const cart = [...state.cart]
               cart.push(action.payload)
               return{
                    cart
               }
          }
          case 'REMOVE': {
               

          }
          default: return state
     }
}

const store = createStore(reducer)
export default store