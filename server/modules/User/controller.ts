import { Request, Response } from "express";
import User from "./service";


class UserController{

    private UserService:User;

    constructor(){
        this.UserService = new User();
    }

     getAll(req:Request, res:Response){
         this.UserService.getAllUsers()
         .then(data => {
            res.status(200).json({payload:data});
        })
        .catch(e=>{ res.status(500).json({payload:'Error to find users'})  });
    }


    createUser(req:Request, res:Response){
       
         this.UserService.create(req.body)
        .then((data: any)=>{
            res.status(200).json({payload:data});
        })
        .catch((e: any)=>{ res.status(500).json({payload:'Error to create user'})  });
    }

     getById(req:Request, res:Response){
        
        const userId = parseInt(req.params.id);

         this.UserService.getUserById(userId)
        .then(data=>{
            res.status(200).json({payload:data});
        })
        .catch(e=>{ res.status(500).json({payload:'Error to fin user'})  });
    }

    updateUser(req:Request, res:Response){
      
        const userId = parseInt(req.params.id);
        const props = req.body;

        this.UserService.updateUser(userId, props)
        .then((data: any) => {
            res.status(200).json({payload:data});
        })
        .catch((e: any)=>{
            res.status(500).json({payload:'Error to update user'});
        }) ;
    }

    deleteUser(req:Request, res:Response){
        const userId = parseInt(req.params.id);
        this.UserService.deleteUser(userId)
        .then((data: any)=>{
            res.status(200).json({payload:data});
        })
        .catch((e: any)=>res.status(500).json({payload:'Error to delete user'}));
    }
}

export default UserController;