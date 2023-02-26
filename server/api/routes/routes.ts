import { Application } from "express";
import UserRoutes from "../../modules/User/routes";



class Routes {

    private userRoutes:UserRoutes;
    private auth;

    constructor(express: Application, auth:any) {
        this.userRoutes = new UserRoutes();
        this.auth = auth;
        this.getRoutes(express);
    }

    getRoutes(express: Application): void {
        express.route('/').get((req, res) => res.json({ ok: true }));
        express.route('/users/all').all(this.auth.authenticate()).get(this.userRoutes.index);
        express.route('/users/create').post(this.userRoutes.create);
        express.route('/user/:id').all(this.auth.authenticate()).get(this.userRoutes.findOne);
        express.route('/users/:id/update').all(this.auth.authenticate()).put(this.userRoutes.update);
        express.route('/users/:id/destroy').all(this.auth.authenticate()).delete(this.userRoutes.destroy);
    }


}

export default Routes;