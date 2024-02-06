import React, {useState} from "react";


const ToDo=()=>{

    const[todo,setTodo]= useState("");
    return(
        <div>
            <h1>My todos</h1>
            <div>
                {todo}
            </div>
            <button onClick={()=>{setTodo("New Todo")}}>Add Todo</button>
        </div>
    )
}

export default ToDo;