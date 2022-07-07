const pet = require('../controllers/pet.controller');
module.exports = function(app){
    app.get('/pets', pet.findAll);
    app.get('/pets/:id', pet.findOne);
    app.post('/pets', pet.create);
    app.delete('/pets/:id', pet.delete);
    app.put('/pets/:id', pet.update);
}

