import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart:[],
    },
    reducers: {
        addToCart: (state,action) => {
          const itemPresent = state.cart.find(item => item.id === action.payload.id);
          
          if(itemPresent) {
            itemPresent.quantity++
          } else {
            state.cart.push({...action.payload, quantity:1})
          }
        // state.cart.push(action.payload)
        },
        removeFromCart: (state,action) => {
            const removeFromCart = state.cart.filter(item => item.id !== action.payload.id)

            state.cart = removeFromCart
        },
        incrementQuantity: (state,action) => {
            const itemPresent = state.cart.find(item => item.id === action.payload.id);

            itemPresent.quantity++
        },
        decrementQuantity: (state,action) => {
            const itemPresent = state.cart.find(item => item.id === action.payload.id);

            if (itemPresent.quantity == 1) {
                const removeFromCart = state.cart.filter(item => item.id !== action.payload.id)

                state.cart = removeFromCart
            } else {
                itemPresent.quantity--
            }
        },
        clearData:(state,action) => {
            state.cart = []
        }
    }
})

export const {addToCart,removeFromCart,incrementQuantity,decrementQuantity,clearData} = cartSlice.actions

export default cartSlice.reducer