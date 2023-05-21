const intialState={
    isLoading:false,
    data:[],
    isError:false,
}
export const todoListreducer=(state=intialState,{type,payload})=>{
    switch(type){
        case "TODOREQUEST":{
            return {...state,isLoading:true}
        }
        case "TODOSUCCESS":{
            return {...state,isLoading:false,data:payload}
        }
        case "TODOFAILURE":{
            return {...state,isError:true}
        }
        case "TODOPOSTREQUEST":{
            return {...state,isLoading:false,data:[...state.data,payload]}
            // return [...state,payload]
        }
       
        default :{
            return state
        }
    }
}