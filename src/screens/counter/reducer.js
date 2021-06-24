import { DECREMENT, INCREMENT } from "../../utils/actionNames"

const initialstate = {
    counter:0
}
const counterReducer= (state=initialstate, action)=>{
    switch(action.type){
        case INCREMENT:return {
            ...state,
            counter:state.counter+action.payload
        }
        case DECREMENT:return{
            ...state,
            counter:state.counter - action.payload
        }
        default:
            return state;
}
}
export default counterReducer;