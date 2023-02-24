import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type enemyStatusType = {
    name:string,
    hp:number, 
    at:number
    

}
const initialState:enemyStatusType = {name:"",hp: 0, at:0}

//enemy1
export const enemy1Slice = createSlice({
    name:"enemy", 
    initialState, 
    reducers:{
        createEnemy1:(state, action:PayloadAction<enemyStatusType>)=>{
            state.name = action.payload.name,
            state.hp=action.payload.hp,
            state.at=action.payload.at
        },
        atackEnemy1:(state, action:PayloadAction<{atack:number}>)=>{
            state.hp=state.hp-action.payload.atack
        },
        maketozero1:(state)=>{
            state.hp = 0
        }
    }
})

export const enemy1Reducer = enemy1Slice.reducer;
export const {atackEnemy1, createEnemy1, maketozero1} = enemy1Slice.actions 

//enemy2
export const enemy2Slice = createSlice({
    name:"enemy", 
    initialState, 
    reducers:{
        createEnemy2:(state, action:PayloadAction<enemyStatusType>)=>{
            state.name = action.payload.name,
            state.hp=action.payload.hp,
            state.at=action.payload.at
        },
        atackEnemy2:(state, action:PayloadAction<{atack:number}>)=>{
            state.hp=state.hp-action.payload.atack
        },
        maketozero2:(state)=>{
            state.hp = 0
        }
    }
})

export const enemy2Reducer = enemy2Slice.reducer;
export const {atackEnemy2, createEnemy2, maketozero2} = enemy2Slice.actions 

//enemy3
export const enemy3Slice = createSlice({
    name:"enemy", 
    initialState, 
    reducers:{
        createEnemy3:(state, action:PayloadAction<enemyStatusType>)=>{
            state.name = action.payload.name,
            state.hp=action.payload.hp,
            state.at=action.payload.at
        },
        atackEnemy3:(state, action:PayloadAction<{atack:number}>)=>{
            state.hp=state.hp-action.payload.atack
        },
        maketozero3:(state)=>{
            state.hp = 0
        }
    }
})

export const enemy3Reducer = enemy3Slice.reducer;
export const {atackEnemy3, createEnemy3, maketozero3} = enemy3Slice.actions 