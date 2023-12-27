import { createSlice } from "@reduxjs/toolkit";

const listGuestSlice =  createSlice({
    name: "listGuest",
    initialState: {
        listGuest : [],
    },
    reducers:{
        addGuests(state,action){
            state.listGuest.push({listGuestsValue: action.payload})
        }
    }
})

export const{addGuests} = listGuestSlice.actions
export default listGuestSlice.reducer