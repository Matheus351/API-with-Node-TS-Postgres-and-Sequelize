import express, { Application } from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { errorHandlerApi } from './errorHandlerApi';
import AuthConfig from '../auth';


import Routes from './routes/routes';



class Api {

    public express: Application;
    public auth;

    constructor() {
        this.express = express();
        this.auth = AuthConfig();
        this.middleware();
    }

    middleware(): void {
        this.express.use(morgan('dev'));
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(bodyParser.json());
        this.express.use(errorHandlerApi);
        this.express.use(this.auth.initialize());
        this.router(this.express, this.auth);
    }

    private router(express: Application, auth:any): void {
        new Routes(express, auth);
    }

}


export default new Api().express;