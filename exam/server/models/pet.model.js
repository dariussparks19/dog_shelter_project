const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({
        name: {type: String, minlength: [3, "Name must be 3 characters long!"]},
        type: { type: String, minlength: [3, "Type must be 3 characters long!"]},
        desc: {type: String, minlength: [3, "Description must be 3 characters long!"]},
        skill_1: {type: String},
        skill_2: {type: String},
        skill_3: {type: String}
        }, { timestamps: true });
module.exports.Pet = mongoose.model('Pet', PetSchema);

