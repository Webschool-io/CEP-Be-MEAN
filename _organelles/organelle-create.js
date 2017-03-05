'use strict'
module.exports = (Organism) => 
(req, res,body) => {
	req.body = body
	
	const query = req.body
	const success = require('./ribossomos/success-200-json')(res)
	const error = require('./ribossomos/error-json')(res)
	
	return Organism.create(query)
	.then((organism)=>{
		const object = {
			code: organism.code,
			state: organism.state,
			district: organism.district,
			address: organism.address,
			city: organism.city
		}
		
		res.json(object)
	})
	.catch(error)
}

