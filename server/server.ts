import http from 'http';
import api from './api/api';

const config = require('./config/env/config')();

const server = http.createServer(api);

server.listen(3000);
server.on('listening', () => console.log(`Server is running on: http://localhost:${config.serverPort}`));
server.on('error', (error: NodeJS.ErrnoException) => console.log(`Error:${error}`));


