const { Router } = require('express');
const collectionRouter = Router();
const collectionController = require('./collection.controller')



collectionRouter.post('/books',collectionController.createBooks);
collectionRouter.post('/authors', collectionController.createAuthors);

collectionRouter.post('/logs/capped', collectionController.createCappedLogs);
collectionRouter.post('/books/index', collectionController.createBooksIndex);


module.exports= collectionRouter;