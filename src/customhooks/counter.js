import React, {useState} from 'react';
// state change = component render = useEffect

const Counter = (initialstate = 0, value=1)=>{
    const [count, setCount] = useState(initialstate);
    
    const IncrementCount = ()=>{
        setCount(previous=>previous+value)
    }

    const DecrementCount = ()=>{
        setCount(previous=>previous-value)
    }

    return [count, IncrementCount, DecrementCount, setCount];
}


export default Counter;