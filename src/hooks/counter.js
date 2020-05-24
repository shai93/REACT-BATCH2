import React, {useState} from 'react';

// useState = first initial state, setter state function = setState()

const Counter = ()=>{
    const [count, setCount] = useState(0);

    const IncrementHandler = ()=>setCount(previousState=>previousState+1)
    const ResetHandler = ()=>setCount(0)
    const DecrementHandler = ()=>setCount(previousState=>previousState-1)
    // previous
    const IncrementFiveHandler = ()=>{
        for(let i = 0; i< 5; i++){
            setCount(previousState=>previousState+1) 
        }
    }
    
    return(
        <div>
            <div>
                {count}
            </div>
            <button onClick={IncrementHandler}>Increment</button>
            <button onClick={ResetHandler}>Reset</button>
            <button onClick={DecrementHandler}>Decrement</button>
            <button onClick={IncrementFiveHandler}>Increment 5</button>
        </div>
    )
}


export default Counter;