import React, {useState, useEffect} from 'react';
// state change = component render = useEffect

const ECounter = ()=>{
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log('in');
        document.title = `clicked ${count} times`
    });
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>clicked {count} times</button>
        </div>
    )
}


export default ECounter;