import 
{ Request,
  Response,
  ErrorRequestHandler,
  NextFunction } 
from "express";

export function errorHandlerApi(err:ErrorRequestHandler, req:Request, res:Response, next:NextFunction){
    res.status(500).json({
        errorCode:'Error 001',
        message:'Internal Server Error'
    });
}