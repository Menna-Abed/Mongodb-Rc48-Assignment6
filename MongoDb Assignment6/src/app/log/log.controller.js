const logService = require('./log.service');

 const insertLog = async (req, res, next) => {
   try {
       const result = await logService.insertLogService(req.body);
       res.status(201).json(result);
   }catch(error){
       next(error);
   }
};


 module.exports = {insertLog}