import express from 'express';
import * as dotenv from 'dotenv';
import sequelize from './config/database.js';
import cors from 'cors';
import path from 'path';
import ErrorHandlingMiddleware from './middleware/ErrorHandlingMiddleware.js';
import {router} from './routes/index.js';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
// парсинг входящих запросов с JSON-телом
app.use(express.json());
app.use('/', router);
app.use(ErrorHandlingMiddleware);
// отдача статических файлов по url /static
app.use('/static', express.static(path.resolve(__dirname, 'static')));

const start = async() => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Сервер запущен на порте ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

start();