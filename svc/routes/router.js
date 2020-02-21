const log = require('../utils/logger');
const tasksController = require('../controllers/tasksController');

const registerRoutes = function(server){
    // 
    server.get('/tasks', function(request, response, next){
        log.info("Get Tasks :: Request Initiated");
        tasksController.getAllTasks().then(function(tasksResponse){
            log.info("Log success", tasksResponse.data);
            const customResponse = {
                "results": tasksResponse.data
            }
            response.send(tasksResponse.data);
        }).catch(function(error){
            log.info("Log Error");
        });
        return next();
    })
}

module.exports = registerRoutes;