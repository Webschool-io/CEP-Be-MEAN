'use strict'
module.exports = (Organism) => 
(req, res,body) => {
	const object = {};
	object.code = body['post code']
	object.contry = body.country
	object.places = body.places
	
	const success = require('./ribossomos/success-200-json')(res)
	const error = require('./ribossomos/error-json')(res)
	
	return Organism.create(object)
	.then((organism)=>{
		const object = {
			code: organism.code,
			contry: organism.contry,
			places: organism.places
		}
		res.json(object)
	})
	.catch(error)
}

