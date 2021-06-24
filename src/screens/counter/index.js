import {useDispatch, useSelector} from 'react-redux'
import {incrementNumber, decrementNumber} from './action'

function Counter(){

    const dispatch= useDispatch()
    const {counter} = useSelector(state=>state.counterReducer)
    return(
        <div>
        <div> counter:{counter}</div>
        <button onClick={() => {dispatch(incrementNumber(1))
        }}
        >Increment</button>
        <button onClick={() => {dispatch(decrementNumber(1))
        }}>Decrement</button>
        </div>  
    )
}
export default Counter;