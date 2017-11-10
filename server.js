const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 1337
});

server.route({
    method: 'GET',
    path: '/hello',
    handler: function(requet, reply){
        reply('Hello World');
    }
});

server.route({
    method: 'GET',
    path: '/',
    handler: function(requet, reply){
        reply('Root');
    }
});

server.start(function() {
    console.log('Server running at: ', server.info.uri);
});