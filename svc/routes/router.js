const log = require('../utils/logger');
const tasksController = require('../controllers/tasksController');

const registerRoutes = function(server){
    // Get All Tasks
    server.get('/tasks', function(request, response, next){
        log.info("Get Tasks :: Request Initiated");
        tasksController.getAllTasks().then(function(tasksResponse){
            log.info("Log success", tasksResponse.data);
            response.send(tasksResponse.data);
        }).catch(function(error){
            log.info("Get All Tasks Error");
        });
        return next();
    });

    // Get Task By Id
    server.get('/tasks/:id', function(request, response, next){
        tasksController.getTaskById(request.params.id).then(function(tasksResponse){
            response.send(tasksResponse.data);
        }).catch(function(error){
            log.info("Get Task with Id Error!");
        })
        return next();
    });

    // Create Root Task
    server.post('/tasks', function(request, response, next){
        tasksController.createTask(request.body).then(function(taskResponse){
            response.send(taskResponse.data);
        }).catch(function(error){
            log.info("Create Task Error!");
        });
        return next();
    });

    // Create Sub Tasks
    server.post('/tasks/:id', function(request, response, next){
        tasksController.createSubTask(request.body, request.params.id).then(function(taskResponse){
            response.send(taskResponse.data);
        }).catch(function(error){
            log.info("Create Sub Tasks Error!");
        });
        return next();
    });

    //Edit task
    server.put('/tasks/:id', function(request, response, next){
        tasksController.editTask(request.body, request.params.id).then(function(taskResponse){
            response.send(taskResponse.data);
        }).catch(function(error){
            log.info("Edit Task Error!");
        });
        return next();
    });

    // Delete Task
    server.del('/tasks/:id', function(request, response, next){
        tasksController.deleteTask(request.params.id).then(function(taskResponse){
            response.send(taskResponse.data);
        }).catch(function(error){
            log.info("Delete Task Error!");
        });
        return next();
    });
}

module.exports = registerRoutes;