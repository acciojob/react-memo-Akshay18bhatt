import React from "react";
import ToDo from "./ToDo";
import Counter from "./Counter";
import Skill from "./Skill";



const App= ()=>{

    return(
        <div>
            <ToDo/>
            <hr/>
            <Counter/>
            <hr/>
            <Skill/>
        </div>
    )
}

export default App