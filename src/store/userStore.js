import {createSlice} from '@reduxjs/toolkit'

const userStore = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;


const userSlice = createSlice({
    name:'user',
    initialState: {user: userStore,loading:false,err:null},
    reducers: {
        login(state,action){
            state.user = action.payload;
            localStorage.setItem('user',JSON.stringify(state.user));
        },
        logout(state,action){
            state.user = null;
        }
    }
})


export const userAction = userSlice.actions;
export const userReducer = userSlice.reducer;
