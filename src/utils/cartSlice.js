import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : "cart",      // give the name for the slice 
    initialState : {    // at initaily the slice should be empty 
        items: []
    },
    reducers: {        // the reducer basicaly onject that contains the actions that we are need 

        addItems : (state, action) => {
            state.items.push(action.payload);
        },
        removeItems : (state) => {
            state.items.pop();
        },
        clearItems : (state) => {
            state.items.length = 0; 
        },
    }
});

// here we have to export the actions and reducers 

export const { addItems, removeItems, clearItems } = cartSlice.actions

export default cartSlice.reducer;
