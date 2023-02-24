import { Application } from "express";
import UserController from "../../modules/User/controller";

class Routes {


    constructor(express: Application) {
        this.getRoutes(express);
    }

    getRoutes(express: Application): void {
        express.route('/').get((req, res) => res.json({ ok: true }));
    }
}

export default Routes;