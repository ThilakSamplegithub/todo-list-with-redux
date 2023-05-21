const initalState={counter:0}
export const counterReducer=(state=initalState,{type,payload})=>{
    switch(type){
        case "INC":{
            return {...state,counter:state.counter+1}
        }
        case "DEC":{
            return {...state,counter:state.counter-1}
        }
        default :{
            return state
        }
    }
}