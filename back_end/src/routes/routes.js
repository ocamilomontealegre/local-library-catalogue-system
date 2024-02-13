import { Router } from 'express';
import { checkApiHealth, addBook, updateBook, searchBook, getBooks } from '../controllers/index.js';
const router = Router();

// Check API state
router.get('/v1/api/health', checkApiHealth);

// Get all books data
router.get('/v1/api/books', getBooks);

// Add a new book
router.post('/v1/api/books', addBook);

// Update a book
router.put('/v1/api/books/:bookId', updateBook);

// Search for books by title or author
router.get('/v1/api/books/search', searchBook);

// Handle unknown endpoints
router.use((req, res) => res.status(404).json({ message: `Endpoint ${req.path} not found` }));

export default router;