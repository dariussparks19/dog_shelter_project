import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';


const Edit = ({id, updatePet}) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [desc, setDesc] = useState("");
    const [skill_1, setSkill_1] = useState("");
    const [skill_2, setSkill_2] = useState("");
    const [skill_3, setSkill_3] = useState("");
    const [errorMessages, setErrorMessages] = useState([]);

    useEffect(() =>{
        axios.get(`http://localhost:8000/pets/${id}`)
        .then(res => {
            console.log(res);
            setName(res.data.name);
            setType(res.data.type);
            setDesc(res.data.desc);
            setSkill_1(res.data.skill_1)
            setSkill_2(res.data.skill_2)
            setSkill_3(res.data.skill_3)
        })
        .catch(err =>{
            console.log(err)
        }) 
    }, [])

    const submitHandler = (event) =>{
        event.preventDefault();
        axios.put(`http://localhost:8000/pets/${id}`, { 
            name: name, 
            type: type, 
            desc: desc,  
            skill_1: skill_1, 
            skill_2: skill_2, 
            skill_3: skill_3,
        })
            .then(res => {console.log(res); 
                updatePet(res.data);
                navigate("/");
            })
            .catch(err => {console.log(err)})
    }
    
    return(
        <div>
            <h1> Pet Shelter</h1>
            <h2> Edit {name}</h2>
                <Link to={"/"}> back to home</Link>
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

export default Edit;