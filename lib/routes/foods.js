const Food = require('../model/food');


const router = {
    get: function(){
        Food.find()
            .then( res => res.json(food));
    }
};


module.exports = router;