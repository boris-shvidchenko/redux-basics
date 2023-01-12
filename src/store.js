import { configureStore } from '@reduxjs/toolkit';
import postReducer from './features/slices/postSlice';

export const store = configureStore({
    reducer: {
        posts: postReducer
    }
})