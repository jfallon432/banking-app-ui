import {configureStore, createStore} from "@reduxjs/toolkit";
import allReducers from "../reducers/allReducers";
import loginReducer from "../reducers/loginReducer";

const store = createStore(allReducers);

export default store;