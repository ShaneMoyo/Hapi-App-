const assert = require('chai').assert;
const Server = require('../../lib/app');


describe('Hapi Connection', done =>{

    it('Should perform a get reques and recieve a reply of hello world', ()=>{
        Server.inject({
            method: 'GET',
            url: '/hello'
        }, (response) => {
            console.log('i am response ', response);

            assert.ok(response);
            done();
        });
    });
});