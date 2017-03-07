const request = require('request');
const ZipCode = require('../_moleculas/zip-code-model')
const Create  = require('../_organelles/organelle-create')
const CreateBr  = require('../_organelles/organelle-create-br')

module.exports = (req,res)=> {
	function search_one  (req,res){
		request('https://viacep.com.br/ws/'+ req.params.cep+ '/json/', function (error, response, body) {
			response.statusCode == 200 && !JSON.parse(body).erro 
			? CreateBr(ZipCode)(req,res,JSON.parse(body))
			: search_two(req,res)
		});
	}
	function search_two (req,res){
		request('http://api.postmon.com.br/v1/cep/'+ req.params.cep, function (error, response, body) {
			response.statusCode == 200 && !JSON.parse(body).error 
			? CreateBr(ZipCode)(req,res,JSON.parse(body))
			: search_three(req,res)
		});
	}
	function search_three (req,res){
		request('http://apps.widenet.com.br/busca-cep/api/cep.json?code='+req.params.cep, function (error, response, body) {
			response.statusCode == 200 && JSON.parse(body).status
			? Create(ZipCode)(req,res,JSON.parse(body))
			: search_four(req,res)
		});
	}
	function search_four (req,res){
		const cep = req.params.cep.replace(/[^\d]+/g,'')
		request('http://correiosapi.apphb.com/cep/'+ cep, function (error, response, body) {
			response.statusCode == 200 && !JSON.parse(body).message 
			? CreateBr(ZipCode)(req,res,JSON.parse(body))
			: search_five(req,res)
		});
	}

	function search_five (req,res){
		request('http://cep.republicavirtual.com.br/web_cep.php?cep='+req.params.cep+'&formato=json', function (error, response, body) {
			response.statusCode == 200 && body.resultado 
			? CreateBr(ZipCode)(req,res,body)
			: search_six(req,res)
		});
		
	}
	function search_six (req,res){
		request('http://appservidor.com.br/webservice/cep?CEP='+req.params.cep, function (error, response, body) {
			response.statusCode == 200 && body.total 
			? CreateBr(ZipCode)(req,res,body)
			: res.json({cep: 'Não Encontrado!'})
		});
		
	}

	return search_one
}







