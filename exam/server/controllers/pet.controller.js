const { response } = require('express');
const { Pet } = require('../models/pet.model');



module.exports = {
    create: (req, res) => {
        Pet.create(req.body)
            .then(pets => res.json(pets)) 
            .catch(err => res.status(400).json(err));
    },
    findAll: (req, res) => {
        Pet.find()
            .then(pets => res.json(pets)) 
            .catch(err => res.status(400).json(err));
    },
    findOne: (req, res) => {
        Pet.findOne({_id: req.params.id})
            .then(pet => res.json(pet)) 
            .catch(err => res.status(400).json(err));
    },
    delete: (req, res) => {
        Pet.deleteOne({_id: req.params.id})
            .then(pet => res.json(pet)) 
            .catch(err => res.status(400).json(err));
    },
    update: (req, res) => {
        Pet.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true, new: true})
            .then(pet => res.json(pet)) 
            .catch(err => res.status(400).json(err));
    }
    }