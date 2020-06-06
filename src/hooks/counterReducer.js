import React, {useReducer} from 'react';

const initialstate = 0;
const reducer = (state=initialstate, action)=>{
    switch(action){
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        default:
            return state;
    }
}

const CounterReducer = ()=>{
    
    const [count, dispatch] = useReducer(reducer, initialstate)

    return (
        <div>
        <h1>Count  - {count}</h1>
        <button onClick={()=>dispatch('increment')}>Increment</button>
        <button onClick={()=>dispatch('decrement')}>Decrement</button>
        </div>
    )
}

export default CounterReducer