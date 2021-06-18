import React, { useState, useEffect } from 'react';

function UseEffectDemo() {
    const [Count, setCount] = useState(0);
    useEffect(() => {
        document.title=`You clicked ${Count} times`
    });
    return (
        <div>
            <p>You clicked {Count} times</p>
            <button onClick={()=>setCount(Count+1)}>Click Me {Count}</button>
            
        </div>
    )
}

export default UseEffectDemo
