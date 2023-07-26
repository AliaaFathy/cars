import {createSlice, nanoid} from "@reduxjs/toolkit";


const carListSlice=createSlice({
    name:'carList',
    initialState:{searchterm:'',carList:[]},
    reducers:{
        changeSearch(state,action){
            state.searchterm=action.payload
        },
        addCar(state,action){
            state.carList.push({
                name:action.payload.name,
                cost:action.payload.cost,
                id:nanoid()
            })
        },
        removeCar(state,action){
            const updated=state.carList.filter((state)=>{
                return state.id!==action.payload
            })
            state.carList=updated
           // const index=state.indexOf(action.payload)
        }
    }
})
export const{addCar,removeCar,changeSearch}=carListSlice.actions
export const CarListReducer=carListSlice.reducer