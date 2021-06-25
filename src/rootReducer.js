import {combineReducers} from 'redux';
import counterReducer from './screens/counter/reducer'
import colorReducer from './modules/Assignment11/reducer'


const rootReducer = combineReducers({
    counterReducer,
    colorReducer
})
export default rootReducer;