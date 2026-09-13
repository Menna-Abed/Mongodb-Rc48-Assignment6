const db = require('../../common/db/mongodb.js');



  const insertLogRepo = async (logData) => {
    return await db.collection('logs').insertOne(logData);
};


  module.exports = {insertLogRepo}