import { useEffect, useReducer } from "react";

const initialState = {
    loading: true,
    error: '',
    data: {}
}

const reducer = (state, action) => {
    switch(action.type){
        case 'SUCCESS':
            return{
                loading: false,
                data: action.result,
                error: ''
            }
        case 'FAIL':
            return{
                loading: false,
                data: {},
                error:'There is a problem for fetching Data....!'
            }
        default:
            return state
    }
}

export default function ApiFetching(){
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then((data)=>{
            dispatch({type:'SUCCESS', result:data})
        }).catch(()=>{
            dispatch({type: FAIL})
        })
    },[])

    return(
        <div>
            {state.loading? 'Loading...':state.data.title}
            {state.error||null}
        </div>
    )
}