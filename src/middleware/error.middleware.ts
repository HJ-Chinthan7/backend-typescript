import { Request,Response,NextFunction } from "express";
import {appError} from '../utils/app.error'
const errorMiddlewareHandler=(err:appError,req:Request,res:Response,next:NextFunction)=>{
res.status(err.statusCode).json({
    "message":err.message,
    "errorCode":err.statusCode,
    "name":err.name
});
};

export default errorMiddlewareHandler;