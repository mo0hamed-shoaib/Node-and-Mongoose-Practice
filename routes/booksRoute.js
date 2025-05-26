import { Router } from 'express';
import {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
} from '../controllers/bookController.js';
import { upload } from '../middleware/upload.js';

const router = Router();

router.route('/')
    .get(getAllBooks)
    .post(upload.single('coverImage'), createBook);

router.route('/:id')
    .get(getBookById)
    .put(upload.single('coverImage'), updateBook)
    .delete(deleteBook);

export default router;