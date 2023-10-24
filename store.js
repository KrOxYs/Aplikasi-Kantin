import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartReducer";
import ProductReducer from "./ProductReducer";
import menuReducer from "./menuReducer";
export default configureStore({
    reducer:{
        cart:CartReducer,
        product:ProductReducer,
        owner:menuReducer
    }
})