import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios'


const Display = ({id, deleteById}) => {

    const [pet, setPet] = useState([{
        _id: "",
        name: "",
        type: "",
        desc: "",
        skill_1: "",
        skill_2: "",
        skill_3: "",
    }]);

    useEffect(() => {
        axios.get(`http://localhost:8000/pets/${id}`)
            .then(res => {setPet(res.data)})
    }, [id]);

    const deleteHandler = (id) => {
        deleteById(id);
        navigate("/");
    }
    return(
        <div>
            <Link to={`/`}>Back to home</Link>
            <h1>Pet Shelter</h1>
            <h2>Details about {pet.name}</h2>
            <p>Type: { pet.type }</p>
            <p>Description: { pet.desc }</p>
            <p>Skills:</p>
            <p>{pet.skill_1}</p>
            <p>{pet.skill_2}</p>
            <p>{pet.skill_3}</p>
            <button onClick={ e => deleteHandler(pet._id) }>Adopt {pet.name}</button>
        </div>
    )
}

export default Display;