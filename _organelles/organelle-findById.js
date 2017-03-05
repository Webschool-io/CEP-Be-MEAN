'use strict'
module.exports  = (Organism) => 
  (req, res) => {
    const query = {_id: req.params.id}
    import success  from './ribossomos/success-200-json' (res)
    import error  from'./ribossomos/error-json' (res)
    
    return Organism.findOne(query)
                    .exec()
                    .then(success)
                    .catch(error)
  }

