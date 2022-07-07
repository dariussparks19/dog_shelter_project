import React, { useState } from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

const Create = ({addPet}) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [desc, setDesc] = useState("");
    const [skill_1, setSkill_1] = useState("");
    const [skill_2, setSkill_2] = useState("");
    const [skill_3, setSkill_3] = useState("");

    const [errorMessages, setErrorMessages] = useState([]);

const submitHandler = (event) =>{
    event.preventDefault();
    const newPet ={ 
        name: name, 
        type: type, 
        desc: desc, 
        skill_1: skill_1, 
        skill_2: skill_2, 
        skill_3: skill_3,
    }
    axios.post("http://localhost:8000/pets", newPet)
        .then(res => {
            console.log(res);
            addPet(res.data); 
            navigate("/");
        })
        .catch(err => {
            console.log(err.response.data);
            const { errors } = err.response.data;
            setErrorMessages(Object.keys(errors).map(err => errors[err].message));
        })
}

    return(
        <div>
            <h1> Pet Shelter </h1>
            <h2> Know a pet needing a home? </h2>
                <Link to={"/"}> show all</Link>
                {
                    errorMessages.map((val, i) =>
                <p key = {i}>{val}</p>
                    )
                }

                <form onSubmit={submitHandler}> 
                    <p>Pet Name: </p>
                    <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                    <p>Pet Type: </p>
                    <input type="text" value={type} onChange={e => setType(e.target.value)}/>
                    <p>Pet Description: </p>
                    <input type="text" value={desc} onChange={e => setDesc(e.target.value)}/>
                    <p> Skills (optional)</p>
                    <p>Skill 1: </p>
                    <input type="text" value={skill_1} onChange={e => setSkill_1(e.target.value)}/>
                    <p>Skill 2: </p>
                    <input type="text" value={skill_2} onChange={e => setSkill_2(e.target.value)}/>
                    <p>Skill 3: </p>
                    <input type="text" value={skill_3} onChange={e => setSkill_3(e.target.value)}/>
                    <p>
                    <input type="submit" value="Add pet"/>
                    </p>
                </form>
        </div>
    )
}

export default Create;