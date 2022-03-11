const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express'); 
const swaggerFile = require('../swagger_output.json');
require('dotenv').config();
const routes = require('./routes.js');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(routes);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(PORT, () => {
    console.log("Escutando na porta: ", PORT);
})

