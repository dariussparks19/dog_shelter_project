import React, { useState, useEffect } from 'react';
import {Router} from '@reach/router';
import List from './List';
import Display from './Display';
import Create from './Create';
import Edit from './Edit';
import axios from 'axios'
import { set } from 'mongoose';


const Main = (props) => {
    const [pets, setPets] = useState([]);

    useEffect(() =>{
        axios.get("http://localhost:8000/pets")
          .then(res =>{
            setPets(res.data);
        }
            )
          .catch(err => 
            {console.error(err)}
            )
    }, [])

    const addPet = (pet) =>{
        setPets([...pets, pet]) 
    }

    const deleteById = (id) => {
        axios.delete(`http://localhost:8000/pets/${id}`) 
        .then(res => { 
            console.log(res);
            deletePet(id);
        })
        .catch(err => {
            console.error(err);
        })
    }

    const deletePet = (id) =>{
        setPets(pets.filter(pet => pet._id !== id));
    }

    const updatePet = (newPet) => {
        setPets(pets.map(pet =>  pet._id === newPet._id ? newPet : pet ))
    }

    return(
        <div>
            <Router>
                <List path="/" pet={pets}/>
                <Display path="/show/:id" deleteById={deleteById}/>
                <Create path="/new" addPet={addPet}/>
                <Edit path="/edit/:id" updatePet={updatePet}/>
            </Router>
        </div>
    )
}

export default Main;