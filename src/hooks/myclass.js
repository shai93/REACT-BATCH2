import React from 'react';
import UseCounter from '../customhooks/counter';
const [count, IncrementCount, DecrementCount] = UseCounter(0,5);


export default class Myclass extends React.Component{
    render(){
        return (
            <div>
                <h1>Count  - {count}</h1>
                <button onClick={IncrementCount}>Increment</button>
                <button onClick={DecrementCount}>Decrement</button>
            </div>
        )
    }
}