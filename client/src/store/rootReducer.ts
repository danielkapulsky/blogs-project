import { combineReducers } from "@reduxjs/toolkit";
import { blogApi } from "../services/blog";


export const rootReducer = combineReducers({
    [blogApi.reducerPath]: blogApi.reducer,
})