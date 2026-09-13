const { Router } = require('express');
const bookRouter = Router();
const  bookController = require('./book.controller')

bookRouter.post('/', bookController.insertOneBook);
bookRouter.post('/batch', bookController.insertManyBooks);
bookRouter.patch('/:title', bookController.updateBookTitle);

bookRouter.get('/title', bookController.findBookByTitle);
bookRouter.get('/year', bookController.findBooksByYearRange);
bookRouter.get('/genre', bookController.findBooksByGenre);
bookRouter.get('/skip-limit', bookController.getSkipLimit);
bookRouter.get('/year-integer', bookController.findYearInteger);
bookRouter.get('/exclude-genres', bookController.findExcludeGenres);
bookRouter.delete('/before-year', bookController.deleteBeforeYear);

bookRouter.get('/aggregate1', bookController.aggregate1);
bookRouter.get('/aggregate2', bookController.aggregate2);
bookRouter.get('/aggregate3', bookController.aggregate3);
bookRouter.get('/aggregate4', bookController.aggregate4);

module.exports = bookRouter;