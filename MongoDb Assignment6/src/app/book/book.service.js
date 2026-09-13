const bookRepo = require ('./book.repo')


async  function insertOneBookService  (data) {
    return await  bookRepo.insertOneBookRepo(data);
}
async  function insertManyBooksService (data) {
   return await bookRepo.insertManyBooksRepo(data);
}
async  function updateBookTitleService (title, data) {
    return await  bookRepo.updateBookTitleRepo(title, data);
}
async  function findBookByTitleService (title) {
    return await  bookRepo.findBookByTitleRepo(title);
}
async  function findBooksByYearRangeService  (from, to) {
    return await  bookRepo.findBooksByYearRangeRepo(from, to);
}
async  function findBooksByGenreService (genre) {
    return await  bookRepo.findBooksByGenreRepo(genre);
}
async  function getSkipLimitService () {
    return await  bookRepo.getSkipLimitRepo();
}
async  function findYearIntegerService () {
    return await  bookRepo.findYearIntegerRepo();
}
async  function findExcludeGenresService   () {
    return await  bookRepo.findExcludeGenresRepo();
}
async  function deleteBeforeYearService  (year) {
    return await  bookRepo.deleteBeforeYearRepo(year);
}
async  function aggregate1Service  () {
    return await bookRepo.aggregate1Repo();
}
async  function aggregate2Service () {
    return await bookRepo.aggregate2Repo();
}
async  function aggregate3Service () {
    return await  bookRepo.aggregate3Repo();
}
async  function aggregate4Service () {
    return await  bookRepo.aggregate4Repo();
}



module.exports={
    insertOneBookService,
    insertManyBooksService,
    updateBookTitleService,
    findBookByTitleService,
    findBooksByYearRangeService,
    findBooksByGenreService,
    getSkipLimitService,
    findYearIntegerService,
    findExcludeGenresService,
    deleteBeforeYearService,
    aggregate1Service,
    aggregate2Service,
    aggregate3Service,
    aggregate4Service

}