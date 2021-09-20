import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import userReducer from "../redux/userSlice";

export const store = configureStore({
    reducer:{
        user: userReducer
    },
    middleware:[thunk],
});