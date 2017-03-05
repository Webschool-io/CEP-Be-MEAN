const ctrl = {
	code: (req,res,next)=>{
		req.params.cep.length >= 8 && req.params.cep.length <= 9 
					? next()
					: res.json({code: '8 to 9 characters required'})
	}
}

module.exports = ctrl