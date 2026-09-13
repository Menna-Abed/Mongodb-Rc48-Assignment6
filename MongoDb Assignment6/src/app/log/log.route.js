const { Router } = require('express');
const logRouter = Router();
const logController = require('./log.controller');

logRouter.post('/', logController.insertLog);


module.exports = logRouter;
