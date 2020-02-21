const axios = require('axios');
const config = require('../config/config');

const getAllTasks = function(){
    return axios.get(`${config.api.baseUrl}/tasks`);
}

module.exports = {
    getAllTasks: getAllTasks
}