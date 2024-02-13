import { Router } from 'express';
import { checkApiHealth, addBook, updateBook, searchBook } from '../controllers/index.js';
const router = Router();

// Check API state
router.get('/v1/api/health', checkApiHealth);

// Add a new book
router.post('v1/api/books', addBook);

// Update a book
router.put('v1/api/books/:bookId', updateBook);

// Search for books by title or author
router.get('v1/api/books', searchBook);

// Handle unknown endpoints
router.use((req, res) => res.status(404).json({ message: `Endpoint ${req.path} not found` }));

export default router;