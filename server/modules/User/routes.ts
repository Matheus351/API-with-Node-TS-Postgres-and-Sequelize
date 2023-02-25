import { Request, Response } from "express";
import UserController from "./controller";

let userController:UserController;

class UserRoutes{

  //  userController:UserController;

    constructor(){
        userController = new UserController();
    }


    index(req:Request, res:Response){
        return userController.getAll(req, res);
    }

    create(req:Request, res:Response){
        return userController.createUser(req, res);
    }

    findOne(req:Request, res:Response){
        return userController.getById(req, res);
    }

    update(req:Request, res:Response){
        return userController.updateUser(req, res);
    }


    destroy(req:Request, res:Response){
        return userController.deleteUser(req, res);
    }

}

export default UserRoutes;