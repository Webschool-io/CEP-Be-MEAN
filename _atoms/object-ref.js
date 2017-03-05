
module.exports = (Ref) =>{
	const mongoose = require('mongoose')
	return {type: mongoose.Schema.ObjectId, ref: Ref}
}