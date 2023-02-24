import express, { Application } from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import Routes from './routes/routes';


class Api {

    public express: Application;


    constructor() {
        this.express = express();
        this.router(this.express);
    }

    middleware(): void {
        this.express.use(morgan('dev'));
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(bodyParser.json());
    }

    private router(express: Application): void {
        new Routes(express);
    }

}


export default new Api().express;