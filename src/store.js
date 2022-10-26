import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice'; 
import modalReducer from './features/modal/modalSlice';

// exporting the store variable, which will store our application state 
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer
    },
})