import React, { useState } from 'react';

function NameChange() {
    //usestate using Usf
    const [data, setdata] = useState("sivaji");
    return (
        <div>
            <h1>{data}</h1>
            <button onClick={()=>setdata("siva")}>update name</button>
        </div>
    )
}

export default NameChange
