import { configureStore } from "@reduxjs/toolkit";
import pageTwoSlice from "./reducers/pageTwoSlice/pageTwoSlice";

const store = configureStore({
    reducer:{ 
    dataPageTwo: pageTwoSlice
}
})

export default store