const collectionService = require('./collection.service')



const createBooks =   async (req, res,next) => {
     try{
      await  collectionService.createBooksService();
         res.status(201).json({ ok: 1 });
     } catch(error){
         next(error);
     }
};

const createAuthors =  async (req, res, next) => {
   try{
       const result = await collectionService.createAuthorsService(req.body);
       res.status(201).json(result);
   }catch(error){
       next(error);
   }
};
 const createCappedLogs = async (req, res, next) => {
   try{
       await collectionService.createCappedLogsService();
       res.status(201).json({ ok: 1 });
   }catch(error){
       next(error);
   }
};

  const createBooksIndex = async (req, res, next) => {
   try{
       const result = await collectionService.createBooksIndexService();
       res.status(201).json(result);
   } catch(error){
       next(error);
   }
};



module.exports = {createBooks,createAuthors,createCappedLogs,createBooksIndex}