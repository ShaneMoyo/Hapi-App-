const Hapi = require('hapi');
const server = new Hapi.Server();
const db = require('./database').db;
const Food = require('./lib/models/food');

const routes = require('./routes');
server.route(routes);

server.connection({
    host: 'localhost',
    port: 1337
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hapi World!');
    }
});

server.start((err) => {

if (err) {
        throw err;
    }
    console.log('Server running at: ${server.info.uri}');
});