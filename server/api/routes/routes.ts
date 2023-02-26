import { Application } from "express";
import UserRoutes from "../../modules/User/routes";
import TokenRoutes from "../../models/auth/auth";


class Routes {

    private userRoutes:UserRoutes;
    private tokenRoutes:TokenRoutes;
    private auth;

    constructor(express: Application, auth:any) {
        this.userRoutes = new UserRoutes();
        this.auth = auth;
        this.tokenRoutes = new TokenRoutes();
        this.getRoutes(express);
    }

    getRoutes(express: Application): void {
        express.route('/').get((req, res) => res.json({ ok: true }));
        express.route('/users/all').all(this.auth.authenticate()).get(this.userRoutes.index);
        express.route('/users/create').post(this.userRoutes.create);
        express.route('/user/:id').all(this.auth.authenticate()).get(this.userRoutes.findOne);
        express.route('/users/:id/update').all(this.auth.authenticate()).put(this.userRoutes.update);
        express.route('/users/:id/destroy').all(this.auth.authenticate()).delete(this.userRoutes.destroy);
        express.route('/login').post(this.tokenRoutes.auth);
    }


}

export default Routes;