const Task = require('../models/task');

class TaskService {
    constructor() {
        this.tasks = [];
    }

    getAllTasks() {
        return this.tasks;
    }

    createTask(title, completed) {
        const newId = Date.now();
        const task = new Task(newId, title, completed);
        this.tasks.push(task);
        return task;
    }

    deleteTask(id) {
        const index = this.tasks.findIndex(task => task.id == id);
        if (index === -1) return false;
        this.tasks.splice(index,1);
        return true;
    }
}

module.exports = new TaskService();