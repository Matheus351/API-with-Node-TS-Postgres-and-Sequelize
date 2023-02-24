import { Application } from "express";
import UserRoutes from "../../modules/User/routes";

class Routes {

    private userRoutes:UserRoutes;

    constructor(express: Application) {
        this.getRoutes(express);
        this.userRoutes = new UserRoutes();
    }

    getRoutes(express: Application): void {
        express.route('/').get((req, res) => res.json({ ok: true }));
        express.route('/users/create').post(this.userRoutes.index);
        express.route('/user/:id').get(this.userRoutes.findOne);
        express.route('/users/:id/update').put(this.userRoutes.update);
        express.route('/users/:id/destroy').delete(this.userRoutes.destroy);
    }


}

export default Routes;