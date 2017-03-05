const request = require('request');
const ZipCode = require('../_moleculas/zip-code-model')
const Create  = require('../_organelles/organelle-create')
const CreateCnpj  = require('../_organelles/organelle-create-cnpj')

module.exports = (req,res)=> {
	function search_one  (req,res){
		request('https://www.receitaws.com.br/v1/cnpj/14021664000141', function (error, response, body) {
			response.statusCode == 200 && !body.status
						? CreateCnpj(req,res,body)
						: res.json({cnpj: 'Não encontrado!'})
		});
	}

	return search_one
}







