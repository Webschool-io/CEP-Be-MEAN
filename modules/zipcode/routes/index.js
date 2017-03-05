'use strict'

const list          = require( '../../../_organelles/organelle-findOne');
const ZipCode 		= require( '../../../_moleculas/zip-code-model');
const api 			= require('../../../_quarks/api-zip-code')
const validate 		= require('../validate-zipcode')
module.exports =  (app) => {

  const url = '/api/br'
 
  app.route(url)
  	 .get((req,res)=> res.json({msg: 'Bem vindo api bemean'}))

  app.route(url + '/:cep')
     .get(validate.code,list(ZipCode), api())

}