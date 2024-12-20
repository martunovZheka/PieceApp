import express from 'express';
import hbs from 'hbs';
import path from 'path';
import { PORT, __dirname } from '../config.js';
import layer from './routes/layer.js';

const app = express();

const viewsPath = path.join(__dirname, '/public/components/views');
const partialsPath = path.join(
    __dirname,
    '/public/components/views/partials',
);
const publicPath = path.join(__dirname, '/public');

app.set('views', viewsPath);
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);

app.use(express.static(publicPath));

app.use('/', layer);

app.listen(PORT, () => console.log(`http://localhost:${PORT}/`));
