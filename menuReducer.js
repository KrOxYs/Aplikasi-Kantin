import { createSlice } from "@reduxjs/toolkit";
import { cartSlice } from "./CartReducer";

export const menuSlice = createSlice({
    name:"owner",
    initialState: {
        owner: ""
    },
    reducers: {
        ownerChange: (state,action) => {
            state.owner = action.payload
        }
    }
})

export const {ownerChange} = menuSlice.actions
export default menuSlice.reducer