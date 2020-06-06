import React, {useMemo, useState} from 'react';


const CounterMemo = ()=>{
    
    const  [count1, setCount1] = useState(0)
    const  [count2, setCount2] = useState(0)

    
    const isEven = useMemo(()=>{
        // logic
        // logic
        console.log('call')
        return count1%2
    }, [count1])

    return (
        <div>
            <button onClick={()=>setCount1(count1+1)}>{count1}</button>
            <span>{isEven?'odd': 'even'}</span>
            <button onClick={()=>setCount2(count2+1)}>{count2}</button>
        </div>
    )
}



export default CounterMemo