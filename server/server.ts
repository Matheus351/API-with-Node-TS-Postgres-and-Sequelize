import http from 'http';
import api from './api/api';
import db from './models';
const config = require('./config/env/config')();

const server = http.createServer(api);


db.sequelize.sync().then(() => {
    server.listen(config.serverPort);
    server.on('listening', () => console.log(`Server is running on: http://localhost:${config.serverPort}`));
    server.on('error', (error: NodeJS.ErrnoException) => console.log(`Error:${error}`));
})





