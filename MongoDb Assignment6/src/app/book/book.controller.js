const bookService = require('./book.service')

  const insertOneBook = async (req, res, next) => {
  try {
    const result = await bookService.insertOneBookService(req.body);
    res.status(201).json(result);
  }catch(error){
      next(error);
    }
};

  const insertManyBooks = async (req, res, next) => {
  try {
    const result = await bookService.insertManyBooksService(req.body);
    res.status(201).json(result);
  }catch(error){
    next(error);
  }
};

  const updateBookTitle = async (req, res, next) => {
 try {
   const {title} = req.params;
   const result = await bookService.updateBookTitleService(title, req.body);
   res.status(201).json(result);
 }catch(error){
   next(error);
 }
};

  const findBookByTitle = async (req, res, next) => {
 try {
   const {title} = req.query;
   const result = await bookService.findBookByTitleService(title);
   res.status(201).json(result);
 }catch(error){
   next(error);
 }
};

  const findBooksByYearRange = async (req, res, next) => {
 try {
   const {from, to} = req.query;
   const result = await bookService.findBooksByYearRangeService(from, to);
   res.status(201).json(result);
 }catch(error){
   next(error);
 }
};

  const findBooksByGenre = async (req, res, next) => {
 try {
   const {genre} = req.query;
   const result = await bookService.findBooksByGenreService(genre);
   res.status(201).json(result);
 }catch(error){
   next(error);
 }
};

  const getSkipLimit = async (req, res, next) => {
    try {

    const result = await bookService.getSkipLimitService();
      res.status(201).json(result);
  }catch(error){
  next(error);
}
};

  const findYearInteger = async (req, res, next) => {
  try {
    const result = await bookService.findYearIntegerService();
    res.status(201).json(result);
  }catch(error){
    next(error);
  }
};

  const findExcludeGenres = async (req, res, next) => {
  try {
    const result = await bookService.findExcludeGenresService();
    res.status(201).json(result);
  }catch(error){
    next(error);
  }
};

  const deleteBeforeYear = async (req, res, next) => {
  try{
    const { year } = req.query;
    const result = await bookService.deleteBeforeYearService(year);
    res.status(201).json(result);
  }catch(error){
    next(error);
  }
};

  const aggregate1 = async (req, res, next) => {
  try {
    const result = await bookService.aggregate1Service();
    res.status(201).json(result);
  }catch(error){
    next(error);
  }
};

  const aggregate2 = async (req, res, next) => {
 try {
   const result = await bookService.aggregate2Service();
   res.status(201).json(result);
 }catch(error){
   next(error);
 }
};

  const aggregate3 = async (req, res, next) => {
  try {
    const result = await bookService.aggregate3Service();
    res.status(201).json(result);
  }catch(error){
    next(error);
  }
};

  const aggregate4 = async (req, res, next) => {
  try {
    const result = await bookService.aggregate4Service();
    res.status(201).json(result);
  }catch(error){
    next(error);
  }
};


  module.exports = {
    insertOneBook,
    insertManyBooks,
    updateBookTitle,
    findBookByTitle,
    findBooksByYearRange,
    findBooksByGenre,
    getSkipLimit,
    findYearInteger,
    findExcludeGenres,
    deleteBeforeYear,
    aggregate1,
    aggregate2,
    aggregate3,
    aggregate4
  }