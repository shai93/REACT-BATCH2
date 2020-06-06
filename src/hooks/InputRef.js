import React, {useRef, useEffect} from 'react';

const InputRef = ()=>{
    const inputRef = useRef(null);
    useEffect(()=>{
        // focus
        inputRef.current.focus()
    }, [])
    return (
        <div>
            <input type='text' ref={inputRef}></input>
        </div>
    )
}


export default InputRef;