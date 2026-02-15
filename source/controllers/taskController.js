const { error } = require('node:console');
const taskService = require('../services/taskService');
const Task = require('../models/task');

class TaskController {
    getAll = (request, response) => {
        try {
            const tasks = taskService.getAllTasks();
            response.status(200).json(tasks);
        }
        catch (error) {
            response.status(500).json({error: "Server Error."});
        }
    }

    create = (request, response) => {
        try {
            const { title, completed } = request.body;
            if (!title) {
                return response.status(400).json({error: "Title field is mandatory."});
            }

            const newTask = taskService.createTask(title, completed);
            response.status(201).json(newTask);
        }
        catch (error) {
            response.status(500).json({error: "An error occured during creating a new record."});
        }
    }

    delete = (request, response) => {
        const {id} = request.params;
        const isDeleted = taskService.deleteTask(id);

        if (isDeleted) {
            response.status(204).send();
        }
        else {
            response.status(404).json({error: "No task found to delete"})
        }
    }
}

module.exports = new TaskController();