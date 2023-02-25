import { Application } from "express";
import UserRoutes from "../../modules/User/routes";

class Routes {

    private userRoutes:UserRoutes;

    constructor(express: Application) {
        this.userRoutes = new UserRoutes();
        this.getRoutes(express);
    }

    getRoutes(express: Application): void {
        express.route('/').get((req, res) => res.json({ ok: true }));
        express.route('/users/all').get(this.userRoutes.index);
        express.route('/users/create').post(this.userRoutes.create);
        express.route('/user/:id').get(this.userRoutes.findOne);
        express.route('/users/:id/update').put(this.userRoutes.update);
        express.route('/users/:id/destroy').delete(this.userRoutes.destroy);
    }


}

export default Routes;