import { createSlice } from "@reduxjs/toolkit";

const ToSlice=createSlice({
    name:"todo",initialState:{
        task:[]
    },
    reducers:{
        addTask:(state,action)=>{
            state.task.push(action.payload);
        },
    }
})
export default ToSlice.reducer;
export const{addTask}=ToSlice.actions