import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"
import { todoListreducer } from './reducer/reducer';
import axios from "axios"
import {useSelector,useDispatch} from "react-redux"
import { getData,postRequest } from './Actions/actiontypes'; 
import { todoFailure,todoRequest,todoSuccess,todoAdd, incNumber, decNumber } from './Actions/actiontypes';
function App() {
  const{data}=useSelector((state)=>{console.log(state.todoListreducer);return state.todoListreducer},)
 const {counter}=useSelector((state)=>{console.log(state.counterReducer);return state.counterReducer})
  const [text,setText]=useState("")
  const dispatch=useDispatch()
  useEffect(()=>{
  dispatch(getData())
  },[])
  
  console.log(data)
  return (
    <div className="App">
      <button onClick={()=>dispatch(decNumber())}>-</button>counter:{counter}<button onClick={()=>dispatch(incNumber())}>+</button>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)} /><button onClick={()=>{dispatch(postRequest(text));setText("")}}>add</button>
      <table style={{margin:"auto"}}>
        <thead>
          <tr>
          <th>s.no</th><th>title</th><th>status</th>
          </tr>
        </thead>
        <tbody>{data.map(({id,title,status})=><tr>
          <td>{id}</td><td>{title}</td><td>{status?"completed":"incomplete"}</td>
        </tr>)}</tbody>
      </table>
        
    </div>
  );
}

export default App;
