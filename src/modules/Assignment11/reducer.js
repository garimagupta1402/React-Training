import { COLOR_SUCCESS, COLOR_FAILURE } from "./actionNames"

const initialstate = {
   color:[],
   error: "",
}
const colorReducer= (state=initialstate, action)=>{
    switch(action.type){
        case COLOR_SUCCESS:return {
       
            color: action.payLoad,
            error: "",
        }
        case COLOR_FAILURE:return{
       
            color: [],
            error: action.payLoad,
        }
        default:
            return state;
}
}
export default colorReducer;