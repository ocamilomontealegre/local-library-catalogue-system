// Importing necessary modules from Express and other packages
import express, { json, urlencoded } from 'express';
import cors from 'cors';
import routes from './src/routes/routes.js';

// Creating an Express application instance
const app = express();

// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Parse incoming requests with URL-encoded payloads
app.use(urlencoded({ extended: true }));

// Parse request body as JSON
app.use(json());

// Use defined routes
app.use(routes);

// Exporting the Express application as the default export
export default app;