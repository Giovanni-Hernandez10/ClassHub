import {createSlice} from "@reduxjs/toolkit";

// setting the initial state of auth to null
const initialState = {
    user: null,
    session: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // setUser() -> updates user state to update if user is authenticated
        setAuth: (state, action) => {
            state.user = action.payload.user;
            state.session = action.payload.session;
        },
        // clearUser() -> updates user state to set as not authenticated
        clearAuth: (state) => {
            state.user = null;
            state.session = null;
        }
    }
});

export const {setAuth, clearAuth} = authSlice.actions;
export default authSlice.reducer;

