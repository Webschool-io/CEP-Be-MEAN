
const request = require('request');
const ZipCode = require('../_moleculas/zip-code-us-model')
const Create  = require('../_organelles/organelle-create-us')


module.exports = (parametro) => 
(req,res)=> {
	function search  (req,res){
		request({
			headers: {
				 'User-Agent': 'request'
			}
		},'http://api.zippopotam.us/'+ parametro + '/' + req.params.cep, function (error, response, body) {
			response.statusCode == 200 && JSON.parse(body) 
					? Create(ZipCode)(req,res,JSON.parse(body))
					: res.json({cep: 'Não Encontrado!'})
		});
	}
	return search
}
