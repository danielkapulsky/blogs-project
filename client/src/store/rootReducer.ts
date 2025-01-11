import { combineReducers } from "@reduxjs/toolkit";
import { blogApi } from "../services/blog";
import { userApi } from "../services/user";


export const rootReducer = combineReducers({
    [blogApi.reducerPath]: blogApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
})