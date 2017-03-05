'use strict'
module.exports = (Organism) => 
(req, res,body) => {
	const object = {};
	object.main_activity = body.atividade_principal
	object.date_situation = body.data_situacao
	object.name = body.nome
	object.state = body.uf
	object.phone = body.telefone
	object.email = body.email
	object.secondary_activities = body.atividades_secundarias
	object.qsa = body.qsa
	object.situation = body.situacao
	object.district = body.bairro
	object.address = body.logradouro
	object.number = body.numero
	object.code = body.cep
	object.city = body.municipio
	object.opening = body.abertura
	object.legal_nature = body.natureza_juridica,
	object.fantasy = body.fantasia,
	object.complement = body.complemento,
	object.cnpj = body.cnpj,
	object.last_update = body.ultima_atualizacao,
	object.status = body.status,
	object.type = body.tipo,
	object.efr = body.efr,
	object.reason_situation = body.motivo_situacao,
	object.special_situation = body.situacao_especial,
	object.special_situation_date = body.data_situacao_especial,
	object.share_capital = body.capital_social
	object.extra = body.extra
	const success = require('./ribossomos/success-200-json')(res)
	const error = require('./ribossomos/error-json')(res)
	
	return Organism.create(object)
	.then(success)
	.catch(error)
}

