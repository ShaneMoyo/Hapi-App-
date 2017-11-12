
const assert = require('chai').assert;
const server = require('../app.js').server;


describe('hapi API', () => {

    it('Should save a food',  () => {
        const options = {
            method: 'post',
            url: '/api/foods/pizza',
            payload: { name: 'pizza'}
        };

        return server.inject(options, function (response) {
            assert.deepEqual(response.statusCode, 200);
            assert.deepEqual(response.result.name, 'pizza');
        });
    });

    it('hapi server connect test',  () => {
        const options = {
            method: 'GET',
            url: '/api'
        };

        return server.inject(options, function (response) {
            assert.deepEqual(response.statusCode, 200);
            assert.deepEqual(typeof response.result, 'string');
        });
    });

});