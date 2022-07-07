const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/persondb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Error", err));

require('../models/persons.model')