'use strict'
module.exports  = (Organism) => 
(req, res,next) => {

     function mcep(v){
        v=v.replace(/\D/g,"")                    
        v=v.replace(/^(\d{5})(\d)/,"$1-$2")         
        return v
    }


    const query = {code: mcep(req.params.cep)}
    const success = require('./ribossomos/success-200-json')(res)
    const error = require('./ribossomos/error-json')(res)
    
    return Organism.findOne(query,{_id:0,__v:0, updated_at:0, created_at:0})
                    .exec()
                    .then((organism)=>{
                             !organism
                                 ? next()
                                 : res.json(organism)
                    })
                .catch(error)
}

