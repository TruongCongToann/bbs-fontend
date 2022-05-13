import {ADD_POST} from '../constant'

const initialState = {
  
    listPost:[],
}
const postReducer =(state= initialState,action)=>{
    switch(action.type){
    case ADD_POST:
        return {
            ...state,
            listPost:action.payload,
        }
       
     
    default: return state
    }
}

export default postReducer