import express, { json, urlencoded } from 'express';
import cors from 'cors';
import routes from './src/routes/routes.js';
const app = express();

// Enable CORS
app.use(cors());

// Parse incoming requests with URL-encoded payloads
app.use(urlencoded({ extended: true }));

// Parse request body
app.use(json());

// Use defined routes
app.use(routes);

export default app;