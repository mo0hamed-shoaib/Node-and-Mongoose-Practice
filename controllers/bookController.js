import Book from '../models/booksModel.js';

export const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);

    } catch (err) {
        res.status(500).json({
            message: `Failed to get books: ${err}`
        });
    }
}


export const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({
                message: `Book with ID: ${req.params.id} is not found!`
            });
        } else {
            res.status(200).json(book);
        }

    } catch (err) {
        res.status(500).json({
            message: `Failed to get book: ${err}`
        });
    }
}


export const createBook = async (req, res) => {
    try {
        const { title, author } = req.body;

        // undefined not null because null will be added as a property in the body, undefined won't because it does not exist, unlike null which is set to nothing but anyways exists
        const coverImage = req.file ? req.file.filename : undefined;

        // Create new document then save it
        const newBook = new Book({
            title,
            author,
            coverImage
        });
        await newBook.save();

        res.status(201).json(newBook);

    } catch (err) {
        res.status(500).json({
            message: `Failed to create book: ${err}`
        });
    }
}


export const updateBook = async (req, res) => {
    try {
        const { title, author } = req.body;
        const coverImage = req.file ? req.file.filename : undefined;

        const updatedData = {
            title,
            author
        };

        if (coverImage) {
            updatedData.coverImage = coverImage;
        }

        const updatedBook = await Book.findByIdAndUpdate(req.params.id, updatedData, { new: true });

        if (!updatedBook) {
            return res.status(404).json({
                message: "Book not found"
            });
        } else {
            res.status(200).json(updatedBook);
        }

    } catch (err) {
        res.status(500).json({
            message: `Failed to update book: ${err}`
        });
    }
}


export const deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);

        if (!deletedBook) {
            return res.status(404).json({
                message: "Book not found"
            });
        } else {
            res.status(200).json({
                message: "Book deleted successfully"
            });
        }

    } catch (err) {
        res.status(500).json({
            message: `Failed to delete book: ${err}`
        });
    }
}