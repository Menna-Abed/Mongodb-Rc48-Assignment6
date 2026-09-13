const db = require('../../common/db/mongodb.js');


  const createBooksRepo = async () => {
    return await db.createCollection("books", {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["title"],
                properties: {
                    title: {
                        bsonType: "string",
                        minLength: 1,
                        description: "title must be a non-empty string"
                    }
                }
            }
        }
    });
};

 const createAuthorsRepo = async (data) => {
    return await db.collection("authors").insertOne(data);
};

  const createCappedLogsRepo = async () => {
    return await db.createCollection("logs", { capped: true, size: 1048576 });
};

  const createBooksIndexRepo = async () => {
    return await db.collection("books").createIndex({ title: 1 });
};




module.exports = {createBooksRepo,createAuthorsRepo,createCappedLogsRepo,createBooksIndexRepo}