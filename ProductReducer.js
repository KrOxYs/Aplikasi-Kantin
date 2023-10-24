import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        product:[]
    },
    reducers: {
        getProducts: (state,action) => {
            state.product.push({...state.payload})
        }
    }
})

export const {getProducts} = productSlice.actions;
export default productSlice.reducer