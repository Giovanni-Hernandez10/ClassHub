import {configureStore} from "@reduxjs/toolkit";
import authReducer from "@/redux/authSlice.ts"

// redux store for entire application
const store = configureStore({
    reducer: {
        auth: authReducer
    },
})

export default store;