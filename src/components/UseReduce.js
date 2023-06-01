import { useReducer } from "react"

const initialState1 = 10
const initialState2 = 100

const reducer = (state, action)=>{
    switch(action.type){
        case 'increment':
            return state + action.value
        case 'decrement':
            return state - action.value
        default:
            return state
    }
}

export default function UseReduce(){
    const [count1, dispatch1] = useReducer(reducer, initialState1)
    const [count2, dispatch2] = useReducer(reducer, initialState2)
    return(
        <div>
            <div>
                <div>
                    Count1 = {count1}
                </div>
                <br />
                <button type="button" onClick={()=>dispatch1({
                    type: 'increment',
                    value: 10
                })}>
                    Increment
                </button>
                <br />
                <br />
                <button type="button" onClick={()=>dispatch1({
                    type: 'decrement',
                    value: 10
                })}>
                    Decrement
                </button>
            </div>
            <br />
            <div>
                <div>
                    Count2 = {count2}
                </div>
                <br />
                <button type="button" onClick={()=>dispatch2({
                    type: 'increment',
                    value: 100
                })}>
                    Increment
                </button>
                <br />
                <br />
                <button type="button" onClick={()=>dispatch2({
                    type: 'decrement',
                    value: 100
                })}>
                    Decrement
                </button>
            </div>
        </div>
        
    )
}