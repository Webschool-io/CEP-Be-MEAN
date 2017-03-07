'use strict'
module.exports = (Organism) => 
(req, res,body) => {
	const object = {};
	function mcep(v){
        v=v.replace(/\D/g,"")                    
        v=v.replace(/^(\d{5})(\d)/,"$1-$2")         
        return v
    }
	object.code = mcep(body.cep)
	object.city = body.localidade || body.cidade
	object.state = body.uf || body.estado || body.uf_sigla
	object.district = body.bairro
	object.address = body.logradouro.length > 3 ? body.logradouro : body.logradouro_completo
	object.ibge = body.ibge || body.cidade_info.codigo_ibge
	
	const success = require('./ribossomos/success-200-json')(res)
	const error = require('./ribossomos/error-json')(res)
	
	return Organism.create(object)
	.then((organism)=>{
		const object = {
			code: organism.code,
			state: organism.state,
			district: organism.district,
			address: organism.address,
			city: organism.city,
			ibge: organism.ibge
		}
		res.json(object)
	})
	.catch(error)
}

