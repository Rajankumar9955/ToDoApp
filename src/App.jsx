import { useState } from "react"
import { useDispatch } from "react-redux";

const App=()=>{
  const[txtval,setTxtval]=useState("");
  const[edBtn,]
  return(
    <>
    <h1>To Do APP</h1>
    Enter Your Task: <input type="text" value={txtval} onChange={(e)=>{setTxtval(e.target.value)}} />

     <button onClick={mydis(addTask({id:Date.now(),data:txtval,status:false}))}>ADD</button>
     <hr size="4" color="black" />
     <table>
      <tr>
        <th>Sno</th>
        <th>Your Task</th>
        <th>Delete</th>
        <th>Status</th>
        <th>Edit</th>
      </tr>
      {ans}
     </table>
    </>
  )
}
export default App;