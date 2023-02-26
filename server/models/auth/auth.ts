import { Request, Response } from "express";
import User from "../../modules/User/service";
import jwt from 'jwt-simple';
const config = require('../../config/env/config')();

const UserService = new User();


class TokenRoutes{


    auth(req:Request, res:Response){
        const credentials = {
            email:req.body.email,
            password:req.body.password
        }


        if(credentials.hasOwnProperty('email') && credentials.hasOwnProperty('password')){
            UserService.getUserByEmail(credentials.email)
            .then(user=>{
                if(credentials.password===user.password){
                    const payload = user.id
                    res.json({
                        token:jwt.encode(payload, config.secret)
                    })
                }
            })
            .catch(error=>{
                res.sendStatus(401);
            })
        } 
    }

}

export default TokenRoutes;