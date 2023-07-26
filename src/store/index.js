import {configureStore} from "@reduxjs/toolkit";
import {CarListReducer} from './slices/carListSlice'
import {addCar,removeCar,changeSearch} from "./slices/carListSlice";
import {carCreationReducer, changeName, changeValue} from "./slices/carCreationSlice";


const store=configureStore({
    reducer:{
        cars:CarListReducer,
        createdCar:carCreationReducer
    }
})
export {store,addCar,removeCar,changeName,changeValue,changeSearch}