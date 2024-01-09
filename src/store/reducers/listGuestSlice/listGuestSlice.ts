import { createSlice } from "@reduxjs/toolkit";

interface IListGuestState {
    listGuest : Array<object>
}

const listGuestSlice =  createSlice({
    name: "listGuest",
    initialState: <IListGuestState> {
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