import { useState } from "react"
import { useDispatch } from "react-redux";

const App=()=>{
  const [txtval,setTxtval]=useState("")
  const [edtBtn,setEdbtn]=useState(true);
  const [edId, setEdID]=useState("")
  const mydata=useState((state)=>state.todo.task)
  const mydis=useDispatch();
  
  console.log(mydata)

  let sno=0;
  const delTask=(id)=>{
    mydis(recDelete(id))
  }
}