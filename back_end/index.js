// Importing the think function from the cowsay package
import { think } from 'cowsay';

// Importing the Express application from app.js and the PORT constant from config.js
import app from './app.js';
import { PORT } from './src/utils/config.js';

// Listen for incoming connections on the specified port
app.listen(PORT, () => {
  // Upon successful listening, log a message using cowsay's think function
  console.log(think({
    text: `Server listening on http://localhost:${PORT}`, // Message indicating server is listening
    e: '^^',   // Eyes for the cow
    T: "U "    // Tongue for the cow
  }));
});