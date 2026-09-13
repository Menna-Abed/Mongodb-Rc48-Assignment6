const logRepo = require('./log.repo');

 async function insertLogService (logData) {

    return await logRepo.insertLogRepo(logData);
 }




module.exports = {insertLogService};