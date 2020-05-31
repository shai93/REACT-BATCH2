import React, {useState, useEffect} from 'react';
// componentdidupdate = previusstate and currentstate
// useEffect = componentdidmount = initial
// useEffect = componentdidupdate = state change
const Mouse = ()=>{
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    
    const logmouseevent = (e)=>{
        setX(e.clientX);
        setY(e.clientY);
    }
    // componentdidmount = initially rendering
    useEffect(()=>{
        console.log('in');
        window.addEventListener('mousemove', logmouseevent)
    },[]);

    return(
        <div>
           X - {x}, Y - {y}
        </div>
    )
}


export default Mouse;