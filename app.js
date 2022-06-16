import express from 'express';
import { } from 'dotenv/config';
import { } from './dbConfig.js'

import indexRouter from './routes/index.js';
import apiRouter from './routes/api.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', indexRouter);
app.use('/api', apiRouter);


const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => {
	console.log(`Servidor escuchando en puerto: ${PORT}`);
});



