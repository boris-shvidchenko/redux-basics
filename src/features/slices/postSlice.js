import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
    name: 'posts',
    initialState: [
        {id:'1', title:'Learning Redux Toolkit', content: 'Good things'},
        {id:'2', title:'Slices...', content: 'Slice Dice'}
    ]
    ,
    reducers: {

    }
})

// export {  } from postSlice.action
export default postSlice.reducer


