import { combineReducers } from "@reduxjs/toolkit";
import { blogApi } from "../services/blog";
import { userApi } from "../services/user";
import authReducer from "../services/authSlice"


export const rootReducer = combineReducers({
    [blogApi.reducerPath]: blogApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    auth: authReducer,
})