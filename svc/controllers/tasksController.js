const axios = require('axios');
const config = require('../config/config');

const getAllTasks = function(){
    return axios.get(`${config.api.baseUrl}/tasks`);
}

const getTaskById = function(id){
    return axios.get(`${config.api.baseUrl}/tasks/${id}`);
}

const createTask = function(body){
    return axios.post(`${config.api.baseUrl}/tasks`, body);
}

const createSubTask = function(body, id){
    return axios.post(`${config.api.baseUrl}/tasks/${id}`, body);
}

const editTask = function(body, id){
    return axios.put(`${config.api.baseUrl}/tasks/${id}`, body);
}

const deleteTask = function(id){
    return axios.delete(`${config.api.baseUrl}/tasks/${id}`);
}

module.exports = {
    getAllTasks: getAllTasks,
    getTaskById: getTaskById,
    createTask: createTask,
    createSubTask: createSubTask,
    editTask: editTask,
    deleteTask: deleteTask
}