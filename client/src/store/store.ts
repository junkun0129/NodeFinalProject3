import {configureStore} from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux/es/exports";
import { TypedUseSelectorHook } from "react-redux/es/types";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist"
import {combineReducers} from "@reduxjs/toolkit"

import {enemy1Reducer} from "./features/enemySlice"
import { enemy2Reducer } from "./features/enemySlice";
import { enemy3Reducer } from "./features/enemySlice";
import userStatusReducer from "./features/userStatuSlice"

const persisConfig = {
    key: "root", 
    version: 1, 
    storage
};

const reducer = combineReducers({
    enemy1Reducer,
    enemy2Reducer,
    enemy3Reducer,
    userStatusReducer 
})

const persistedReducer = persistReducer(persisConfig, reducer)

export const store = configureStore({
    reducer:{reducer:persistedReducer}, 
    middleware:[]
})

export const useAppDispatch:()=>typeof store.dispatch = useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
