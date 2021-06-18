import React, { useState } from 'react';

function PreviousState() {
    const intialState=0;
    //usf
    const [Count, setCount] = useState(intialState);
    //anfn
    const IncrementFive=() => {
       for(let i=0;i<5;i++) {
           setCount(PrevCount=>PrevCount+1)
       }
        
    }
    return (
        <div>
            <h1>Count:{Count}</h1>
            <button onClick={()=>setCount(intialState)}>Reset</button>
            <button onClick={()=>setCount(PrevCount=>PrevCount+1)}>Increment</button>
            <button onClick={()=>setCount(PrevCount=>PrevCount-1)}>Decrement</button>
            <button onClick={IncrementFive}>Increment five</button>
        </div>
    )
}

export default PreviousState
