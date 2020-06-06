import React from 'react';
import UseCounter from '../customhooks/counter';
const initialstate = 0;
const value = 10;
const Mycounter = ()=>{

    // call custom hook here 
    const [count, IncrementCount, DecrementCount] = UseCounter(initialstate,value);
    
    return(
        <div>
            <h1>Count  - {count}</h1>
            <button onClick={IncrementCount}>Increment</button>
            <button onClick={DecrementCount}>Decrement</button>
        </div>
    )
}

export default Mycounter;