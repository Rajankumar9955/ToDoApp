import { configureStore } from "@reduxjs/toolkit";

import ToDoRed from "./ToSlice"
const store=configureStore({
    reducer:{
        todo:ToDoRed
    }
})
export default store