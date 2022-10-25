import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice'; 

// exporting the store variable, which will store our application state 
export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
})