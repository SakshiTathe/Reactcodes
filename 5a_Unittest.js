import React, { useState } from "react";
export const ClickCounter=()=>{
    const [counts,setCount]=useState(0)
    return(
        <div>
            <h3>hello</h3>
            <button onClick={()=>setCount(counts+1)}>click</button>
            {/*<button onClick={() => setCount(prev => prev + 1)}>Increment</button>
 */}         <p>{counts}</p>
        </div>
    )
}
