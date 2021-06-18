import React, { useState, useEffect } from 'react';

 export default function ConditionalRunFunction() {
    const [Count, setCount] = useState(0);
    const [name, setName] = useState('')
    useEffect(() => {
        console.log("UseEffect - upadting document title");
        document.title=`You clicked ${Count} times`
    },[Count]);
    return (
        <div>
           <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={()=>setCount(Count+1)}>Click Me {Count}</button>
            
        </div>
    )
}

 
