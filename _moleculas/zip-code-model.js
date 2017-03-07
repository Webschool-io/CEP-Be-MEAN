const mongoose =  require('mongoose');
const Schema   = mongoose.Schema;

const district		    	= require('../_atoms/string')
const city		    		= require('../_atoms/string')
const address		    	= require('../_atoms/string')
const state		    		= require('../_atoms/string')
const ibge		    		= require('../_atoms/string')
const code		   		    = require('../_atoms/string-required-unique')
const created_at		    = require('../_atoms/date-default')
const updated_at 		    = require('../_atoms/date-default')
const deleted_at 		    = require('../_atoms/date-default')

const ZipCode = new Schema({
	district,
	city,
	address,
	code,
	state,
	ibge,
	created_at,
	updated_at
});


ZipCode.set('redisCache', true);
ZipCode.set('expires', 200);
ZipCode.index({code: 1,state:1});

const molecule =  mongoose.model('ZipCodes', ZipCode);


module.exports = molecule