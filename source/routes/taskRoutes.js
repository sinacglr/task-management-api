const express = require('express');
const taskController = require('../controllers/taskController');
const router = express.Router();

router.get('/tasks', taskController.getAll);
router.post('/tasks', taskController.create);
router.delete('/tasks/:id', taskController.delete);

module.exports = router;