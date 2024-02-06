import React, {useState} from "react";
import DisplayToDo from "./DisplayToDo";

const ToDo=()=>{

    const[todo,setTodo]= useState("");
    return(
        <div>
            <h1>My todos</h1>
            <div>
                <DisplayToDo todo={todo}/>
            </div>
            <button id="add-todo-btn" onClick={()=>{setTodo("New Todo")}}>Add Todo</button>
        </div>
    )
}

export default ToDo;