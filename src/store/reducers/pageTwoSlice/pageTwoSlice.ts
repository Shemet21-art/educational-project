import { createSlice } from "@reduxjs/toolkit";


const pageTwoSlice = createSlice({
    name: "pageTwo",
    initialState: {
        dataPageTwo: [],
    },
    reducers:{
        addEmaill(state, action){
            console.log("state", state)
            state.dataPageTwo.push({formValuePageTwo:action.payload})
            console.log("action",action)
        }
    },
})


export const{addEmaill} = pageTwoSlice.actions
export default pageTwoSlice.reducer