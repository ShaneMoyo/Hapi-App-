const assert = require('chai').assert;
const request = require('./request');


describe('Hapi Connection', () =>{

    it('Should perform a get reques and recieve a reply of hello world', ()=>{
        return request.get('/hello')
            .then( res =>{
                console.log('I am the response',res);
                assert.deepEqual(res, 'Hello World');
            });
    });
});