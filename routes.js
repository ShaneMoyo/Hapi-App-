const Food = require('./lib/models/Food');

module.exports = [
    {
        method: 'GET',
        path: '/api/food',
        handler: function (request, reply) {
            Food.find(function (error, foods) {
                console.log('wewffwegwegew', foods);
            });
        }
    },
    {
        method: ['PUT', 'POST'],
        path: '/api/food/{name}',
        handler: function (request, reply) {
            const food = new Food({
                name: request.params.name
            });
            food.save(function (error, food) {
                if (error) {
                    console.error(error);
                }

                reply(food.id);
            });
        }
    }
];