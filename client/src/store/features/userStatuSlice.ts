import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
    userId:string,
    email:string,
    name:string,
    status:{
        at:number, exp:number, hp:number,maxmumHp:number, level:number
    }
}
const initialState:initialStateType = {
    userId:"", 
    email:"",
    name:"",
    status:{
        at:0, exp:0, hp:0,maxmumHp:0, level:0
    }
}

export const userStatusSlice = createSlice({
    name:"userStatus", 
    initialState,
    reducers:{
        createUser:(state, action:PayloadAction<initialStateType>)=>{
            state.userId = action.payload.userId,
            state.email = action.payload.email,
            state.name = action.payload.name,
            state.status = {
                at:action.payload.status.at,
                exp:action.payload.status.exp,
                hp:action.payload.status.hp,
                maxmumHp:action.payload.status.maxmumHp,
                level:action.payload.status.level,
            }
        },
        getAttackFromEnemy:(state, action:PayloadAction<{attack:number}>)=>{
            state.status.hp = state.status.hp - action.payload.attack;
            
        },
        restoreHP:(state, action:PayloadAction<{hp:number}>)=>{
            state.status.hp = action.payload.hp
        }
    }
})

export default userStatusSlice.reducer;
export const {createUser, getAttackFromEnemy, restoreHP} = userStatusSlice.actions

