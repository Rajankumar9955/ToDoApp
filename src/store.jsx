import { configureStore } from "@reduxjs/toolkit";

import todoRed from "./ToDoSlice"
const store=configureStore({
    reducer:{
        todo:todoRed
    }
})

export default store