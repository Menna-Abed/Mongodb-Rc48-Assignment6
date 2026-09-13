const express = require('express');

const bookRouter = require("./app/book/book.route");
const collectionRouter = require("./app/collection/collection.route");
const logRouter = require("./app/log/log.route");

const app = express();

app.use(express.json());

app.use('/collection', collectionRouter);
app.use('/books',bookRouter );
app.use('/logs', logRouter);

app.use((err, req, res, next) => {
 res.json({  message: err, success: false, stack: err.stack })
})

app.listen(3000, () => {
    console.log('server is running on port 3000');
});