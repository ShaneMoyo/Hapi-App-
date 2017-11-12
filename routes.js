
const Food = require('./models/food');

module.exports = [
    {
        method: 'GET',
        path: '/api/foods',
        handler(request, reply) {
            Food.find({}, '', (error, foods) => {
                if (error) {
                    console.error(error);
                }

                reply(foods);
            });
        }
    },
    {
        method: ['PUT', 'POST'],
        path: '/api/foods/{name}',
        handler(request, reply) {
            const food = new Food({
                name: request.params.name
            });
            food.save((error, food) => {
                if (error) {
                    console.error(error);
                }

                reply(food.id);
            });
        }
    }
];