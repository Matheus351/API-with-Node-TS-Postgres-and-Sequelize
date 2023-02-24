import { Request, Response } from "express";
import { request } from "http";
import UserController from "./controller";

class UserRoutes{

    userController:UserController;

    constructor(){
        this.userController = new UserController();
    }


    index(req:Request, res:Response){
        return this.userController.getAll(req, res);
    }

    create(req:Request, res:Response){
        return this.userController.createUser(req, res);
    }

    findOne(req:Request, res:Response){
        return this.userController.getById(req, res);
    }

    update(req:Request, res:Response){
        return this.userController.updateUser(req, res);
    }


    destroy(req:Request, res:Response){
        return this.userController.deleteUser(req, res);
    }

}

export default UserRoutes;