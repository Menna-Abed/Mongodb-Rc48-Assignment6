const collectionRepo = require('./collection.repo')



async function createBooksService() {
   return await collectionRepo.createBooksRepo();
}

async function createAuthorsService (data){
    return await collectionRepo.createAuthorsRepo(data);
}

async function createCappedLogsService () {
    return await collectionRepo.createCappedLogsRepo();
}
async function createBooksIndexService () {
    return  await collectionRepo.createBooksIndexRepo();
}





module.exports = {createBooksService, createAuthorsService,createCappedLogsService,createBooksIndexService};