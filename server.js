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

server.start(function() {
    console.log('Server running at: ', server.info.uri);
});