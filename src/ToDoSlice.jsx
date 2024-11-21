import { createSlice } from "@reduxjs/toolkit";

const ToDoSlice=createSlice({
    name:"todo",initialState:{
        task:[]
    },
    reducers:{
        addTask:(state,action)=>{
            state.task.push(action.payload);
        },
        recDelete:(state,actions)=>{
            state.task=state.task.filter(item=>item.id!=actions.payload);
        },
        taskComplete:(state,actions)=>{
            for(var i=0; i<state.task.length; i++)
            {
                if(state.task[i].id==actions.payload)
                {
                    state.task[i].status=true;
                }
            }
        },
        taskUnComplete:(state,actions)=>{
            for(var i=0; i<state.task.length; i++)
            {
                if(state.task[i]==actions.payload)
                {
                    state.task[i].status=false;
                }
            }
        },
        editDataSave:(state,actions)=>{
            for(var i=0; i<state.task.length; i++)
            {
                if(state.tasl[i].id==actions.payload.id)
                {
                    state.task[i].data=actions.payload.data;
                }
            }
        }
    }
})
export default ToDoSlice.reducer;
export const{addTask,recDelete,taskComplete,taskUnComplete,editDataSave}=ToDoSlice.actions