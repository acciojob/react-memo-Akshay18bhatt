import React from "react";


const DisplaySkills= ({skillsArr})=>{

    return(
        <div>
            {skillsArr.map(whatSkill=>{
                return(<li>{whatSkill}</li>)
            })}
        </div>
    )
}

export default DisplaySkills