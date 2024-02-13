import { think } from 'cowsay';
import app from './app.js';
import { PORT } from './src/utils/config.js';

// Listen server
app.listen(PORT, () => {console.log(think({
    text: `Server listening on http://localhost:${PORT}`,
    e: '^^',
    T : "U "
  }));
});