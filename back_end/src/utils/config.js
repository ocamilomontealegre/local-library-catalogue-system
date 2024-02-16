// Importing and executing the 'config' method from the 'dotenv' package
// This loads environment variables from a .env file into process.env
import 'dotenv/config';

// Defining the server port
// It retrieves the value of the PORT environment variable, defaulting to 3004 if not set
export const PORT = process.env.PORT || 3004;