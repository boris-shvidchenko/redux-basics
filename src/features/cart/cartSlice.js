import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

// all of our app states will be stores in the default initial states object below
const initialState = {
    cartItems: cartItems,
    amount: 1,
    total: 0,
    isLoading: true,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState
});

// console.log(cartSlice);

export default cartSlice.reducer;