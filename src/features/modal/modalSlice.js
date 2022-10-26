import { createSlice } from '@reduxjs/toolkit';

// all of our modal states will be stores in the default initial states object below
const initialState = {
    isOpen: false
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.isOpen = true;
        },
        closeModal: (state, action) => {
            state.isOpen = false;
        }
    }
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;