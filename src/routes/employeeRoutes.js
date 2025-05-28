const express = require('express');
const router = express.Router();
const controller = require('../controller/employeeController');

router.get('/employee', controller.getAll);
router.get('/employee/:id', controller.getById);
router.post('/employee', controller.create);
router.put('/employee/:id', controller.update);
router.delete('/employee/:id', controller.delete);

module.exports = router;