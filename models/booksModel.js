import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    coverImage: {
        type: String
    }
});

// Create collection => books
const Book = mongoose.model("Book", bookSchema);

export default Book;

