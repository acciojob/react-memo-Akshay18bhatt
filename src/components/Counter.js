import React,{useState} from "react";

const Counter= ()=>{
    const [count,setCount] = useState(0);
    return(
        <div id="incr-cnt">
            Count: {count}
            <button onClick={()=>{setCount(count+1)}}>Increment</button>
        </div>
    )
}

export default Counter