import { Actions } from "./actioin";
import axios from "axios";
export  function todoRequest(){
    return {type:Actions.TODOREQUEST}
}
export const todoSuccess=(payload)=>{
    return {type:Actions.TODOSUCCESS,payload:payload}
}
export const todoFailure=()=>{
    return {type:Actions.TODOFAILURE}
}
export const todoAdd=(payload)=>{
    return{type:Actions.TODOPOSTREQUEST,payload:payload}
}
export const incNumber=()=>{
    return{type:Actions.INC}
}
export const decNumber=()=>{
    return{type:Actions.DEC}
}
export const getData=()=>async(dispatch,getState)=>{
        dispatch({type:Actions.TODOREQUEST})
      let res= await axios.get(`http://localhost:8080/data`)
        dispatch({type:Actions.TODOSUCCESS,payload:res.data})
        dispatch({type:Actions.TODOFAILURE})
    }

export const postRequest=(text)=>{
    return async (dispatch)=>{
     dispatch({type:Actions.TODOREQUEST})
     let res= await axios.post(`http://localhost:8080/data`,
     {title:text,status:false})
     dispatch({type:Actions.TODOPOSTREQUEST,payload:res.data})
     dispatch({type:Actions.TODOFAILURE})
    }
}