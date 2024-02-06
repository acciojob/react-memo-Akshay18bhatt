import React, {useState} from "react";
import DisplaySkills from "./DisplaySkills";


const Skill= ()=>{
    const [skillInput, setSkillInput]= useState("");
    const [skillsArr,setSkillsArr] = useState([]);


    function handleSubmit(e){
        e.preventDefault();
        if(skillInput===""){
            alert("Add skill!");
            return;
        }
        setSkillsArr([...skillsArr,skillInput]);
        setSkillInput("");
    }
    return(
        <div>
            <h1>React Memo</h1>
            <form onSubmit={handleSubmit}>
                <input id="skill-input" onChange={(e)=>{setSkillInput(e.target.value)}} type="text" placeholder="Add skill"
                    value={skillInput}
                >

                </input>
                <button>Add Skill</button>
            </form>
            
            {skillsArr.length>0 && (<DisplaySkills skillsArr={skillsArr}/>)}
            
        </div>
    )
}

export default Skill