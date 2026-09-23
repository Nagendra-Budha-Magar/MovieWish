import { createServer } from 'http';
import { pageRoutes } from './routes/PageRoutes.js';
import { logger } from './middleware/logger.js';

const PORT = 8000;
const HOST = 'localhost';

const PlainServer = createServer((req,res) => {
    logger(req,res);
    pageRoutes(req,res);
});

PlainServer.listen(PORT,HOST, () => {
    console.log('Server Started!');
});