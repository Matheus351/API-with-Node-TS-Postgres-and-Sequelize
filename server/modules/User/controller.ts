import { Request, Response } from "express";
import User from "./service";


class UserController{

    private UserService:User;

    constructor(){
        this.UserService = new User();
    }

    async getAll(req:Request, res:Response){
        await this.UserService.getAllUsers()
         .then(data => {
            res.status(200).json({payload:data});
        })
        .catch(e=>{ res.status(500).json({payload:'Erro ao buscar usuarios'})  });
    }


    createUser(req:Request, res:Response){
         this.UserService.create(req.body)
        .then((data: any)=>{
            res.status(200).json({payload:data});
        })
        .catch((e: any)=>{ res.status(500).json({payload:'Erro ao criar um usuario'})  });
    }

    async getById(req:Request, res:Response){
       
        const userId = parseInt(req.params.id);

        await this.UserService.getUserById(userId)
        .then(data=>{
            res.status(200).json({payload:data});
        })
        .catch(e=>{ res.status(500).json({payload:'Erro ao buscar usuario'})  });
    }

    updateUser(req:Request, res:Response){
        
        const userId = parseInt(req.params.id);
        const props = req.body;

        this.UserService.updateUser(userId, props)
        .then((data: any) => {
            res.status(200).json({payload:data});
        })
        .catch((e: any)=>{
            res.status(500).json({payload:'Erro ao atualizar usuario'});
        }) ;
    }

    deleteUser(req:Request, res:Response){
        const userId = parseInt(req.params.id);
        this.UserService.deleteUser(userId)
        .then((data: any)=>{
            res.status(200).json({payload:data});
        })
        .catch((e: any)=>res.status(500).json({payload:'Erro ao deletar usuario'}));
    }
}

export default UserController;