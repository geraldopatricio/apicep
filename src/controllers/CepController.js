const cepPromise = require("cep-promise");
const {param,validationResult} = require("express-validator");


const CepController = {
    validations:  [ 
        param('cep').custom(value => {

               const cepRegex = new RegExp('^\\d{5}-?\\d{3}$');

            if(!cepRegex.test(value)){
                throw new Error('CEP incorreto ou faltando.');
            }
            return true;
        })
    ],
    handler : async (request, response)=> {
      
        const schemaErrors = validationResult(request);
        if(!schemaErrors.isEmpty()){

            return response.status(400).json(schemaErrors.array());
        }


        const {cep} = request.params;
        try{
            const cepResponse = await cepPromise(cep);

            return response.json(cepResponse);
        }catch(CepPromiseError){

            return response.status(404).json( {"msg": "CEP não encontrado"});
        } 
    }
}

module.exports = CepController;