import { configureStore } from "@reduxjs/toolkit";
import pageTwoSlice from "./reducers/pageTwoSlice/pageTwoSlice";
import listGuestSlice from "./reducers/listGuestSlice/listGuestSlice";

const store = configureStore({
    reducer:{ 
    dataPageTwo: pageTwoSlice,
    listGuest: listGuestSlice
}
})

export default store