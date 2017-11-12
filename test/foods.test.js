


const assert = require('chai').assert;



var server = require('../app.js').server;
describe('hapi API', () => {

    

    it('hapi server connect test', function (done) {
        var options = {
            method: 'GET',
            url: '/api'
        };

        server.inject(options, function (response) {
            assert.deepEqual(response.statusCode, 200);
            assert.deepEqual(typeof response.result, 'string');

            done();
        });
    });

});