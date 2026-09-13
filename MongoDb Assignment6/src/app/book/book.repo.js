const db =  require('../../common/db/mongodb.js');


  const insertOneBookRepo = async (bookData) => {
    return await db.collection('books').insertOne(bookData);
};

  const insertManyBooksRepo = async (booksData) => {
    return await db.collection('books').insertMany(booksData);
};

  const updateBookTitleRepo = async (title, updateData) => {
    return await db.collection('books').updateOne(
        { title },
        { $set: updateData }
    );
};

  const findBookByTitleRepo = async (title) => {
    return await db.collection('books').findOne({ title });
};

  const findBooksByYearRangeRepo = async (from, to) => {
    return await db.collection('books').find({
        year: { $gte: Number(from), $lte: Number(to) }
    }).toArray();
};

  const findBooksByGenreRepo = async (genre) => {
    return await db.collection('books').find({ genres: genre }).toArray();
};

  const getSkipLimitRepo = async () => {
    return await db.collection('books')
        .find()
        .sort({ year: -1 })
        .skip(2)
        .limit(3)
        .toArray();
};

  const findYearIntegerRepo = async () => {
    return await db.collection('books').find({ year: { $type: "int" } }).toArray();
};

  const findExcludeGenresRepo = async () => {
    return await db.collection('books').find({
        genres: { $nin: ["Horror", "Science Fiction"] }
    }).toArray();
};

  const deleteBeforeYearRepo = async (year) => {
    return await db.collection('books').deleteMany({
        year: { $lt: Number(year) }
    });
};

  const aggregate1Repo = async () => {
    return await db.collection('books').aggregate([
        { $match: { year: { $gt: 2000 } } },
        { $sort: { year: -1 } }
    ]).toArray();
};

  const aggregate2Repo = async () => {
    return await db.collection('books').aggregate([
        { $match: { year: { $gt: 2000 } } },
        { $project: { _id: 0, title: 1, author: 1, year: 1 } }
    ]).toArray();
};

  const aggregate3Repo = async () => {
    return await db.collection('books').aggregate([
        { $unwind: "$genres" },
        { $project: { _id: 0, title: 1, genres: 1 } }
    ]).toArray();
};



const aggregate4Repo = async () => {
    return await db.collection('logs').aggregate([
        { 
            $addFields: {
                converted_book_id: {
                    $convert: {
                        input: "$book_id",
                        to: "objectId" 
                    }
                }
            }
        },
        {
            $lookup: {
                from: "books",
                localField: "converted_book_id",
                foreignField: "_id",
                as: "book_details"
            }
        },
        {
            $project: {
                _id: 0,
                action: 1,
                "book_details.title": 1,
                "book_details.author": 1,
                "book_details.year": 1
            }
        }
    ]).toArray();
};


module.exports={ insertOneBookRepo,
    insertManyBooksRepo,
    updateBookTitleRepo,
    findBookByTitleRepo,
    findBooksByYearRangeRepo,
    findBooksByGenreRepo,
    getSkipLimitRepo,
    findYearIntegerRepo,
    findExcludeGenresRepo,
    deleteBeforeYearRepo,
    aggregate1Repo,
    aggregate2Repo,
    aggregate3Repo,
    aggregate4Repo }
