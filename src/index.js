import express from 'express';
import ejs from 'ejs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

import router from './routes/index.js';

const app = express();

const _dirname = dirname(fileURLToPath(import.meta.url));

app.set('views', join(_dirname, 'views'));
app.set('view engine', 'ejs');
app.use(router);

//load assets
app.use('/css', express.static(path.resolve(_dirname, 'public/css')));
app.use('/img', express.static(path.resolve(_dirname, 'public/img')));
app.use('/js', express.static(path.resolve(_dirname, 'public/scripts')));

console.log(_dirname);

app.listen(3000);
console.log(`Server is listening on http://localhost:${3000}`);
