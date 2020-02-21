const banyan = require('bunyan');
const config = require('../config/config');

const log = banyan.createLogger({
    name: config.server.name,
    stream: process.stdout,
    level: 'info'
});

module.exports = log;