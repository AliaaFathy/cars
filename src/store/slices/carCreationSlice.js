import {createSlice} from "@reduxjs/toolkit";

import {addCar} from "./carListSlice";

const carCreationSlice=createSlice({
    name:'carCreation',
    initialState:{carName:'',carValue:0},
    reducers:{
        changeName(state,action){
            state.carName=action.payload
        },
        changeValue(state,action){
            state.carValue=action.payload

        }
    },
    extraReducers(builder){
        builder.addCase(addCar,(state,action)=>{
                state.carName=''
                state.carValue=0
        })
    }
})
export const{changeName,changeValue}=carCreationSlice.actions
export  const carCreationReducer=carCreationSlice.reducer