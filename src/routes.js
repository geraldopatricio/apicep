const express = require('express')

const CepController = require('./controllers/CepController.js');


const routes = express.Router();

routes.get("/consultacep/:cep", CepController.validations, CepController.handler);


module.exports = routes;
