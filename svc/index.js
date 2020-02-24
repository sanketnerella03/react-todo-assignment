const restify = require('restify');
const corsMiddleware = require('restify-cors-middleware');

const config = require('./config/config');
const log = require('./utils/logger');
const registerRoutes = require('./routes/router');

const cors = corsMiddleware({
    origins: ["*"]   
})

// creating server
const server = restify.createServer({
    name: config.server.name,
    version: config.server.version
});

// registring middlewares
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.pre(cors.preflight);
server.use(cors.actual);

//registring router
registerRoutes(server);

// listening to server
server.listen(config.server.port, () => {
    log.info(`Listening to server ${config.server.name} on port ${config.server.port}`);
});

module.exports = server;