// import {} from 'red'
import {createSlice,configureStore} from '@reduxjs/toolkit'
import {userReducer} from './userStore'


const carsSlice = createSlice({
    name:'cars',
    initialState:{cars:[],loading:false,error:null,car:null},
    reducers:{
        fetchRequest(state){
            state.loading = true

        },
        fetchCars(state,action){
            console.log(action.payload)
            state.cars = action.payload
            state.loading = false
        },
        fetchFail(state,action){
            state.error = action.payload
            state.loading = false;
        },
        fetchSingleCar(state,action){
            state.car = action.payload
            state.loading = false
        },
        sortHigh(state){
            state.cars = state.cars.sort((a,b)=>b.price - a.price)
                
        },
        sortLow(state){
            state.cars = state.cars?.sort((a,b)=>a.price + b.price)
            
        },
        sortYearHigh(state){
            state.cars = state.cars.sort((a,b)=>b.year - a.year)
                
        },
        sortYearLow(state){
            state.cars = state.cars?.sort((a,b)=> a.year + b.year)
            
        },
    }
})



export const carsAction = carsSlice.actions



const store = configureStore({
    reducer:{
        cars:carsSlice.reducer,
        auth:userReducer
    }

})


export default store