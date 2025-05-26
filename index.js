import express from 'express';
import morgan from 'morgan';
import requestLogger from './middleware/requestLogger.js';
import booksRoute from './routes/booksRoute.js';
import connectDB from './db/configDb.js';

const server = express();

server.use(morgan('dev'));
server.use(requestLogger);

server.use(express.json());
server.use('/books', booksRoute);

connectDB().then(() => {
    server.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
}).catch((err) => {
    console.error("Failed to connect to DB", err);
    process.exit(1);
});

server.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});
