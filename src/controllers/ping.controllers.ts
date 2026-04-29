import { Request, Response } from "express";
//import  fs from "node:fs/promises"
import { InternalServerError } from "../utils/app.error";
import {logger} from "../config/logger.config"
export const pingHandler = async(req: Request, res: Response) => {

    try {
      logger.info("Arrive at ping handler",{requestId:req.headers["X-Request-Id"]});
       // await fs.readFile("sample.txt");
        res.status(200).json({
            "message":"suucessfully retrived the file"
        })
    } catch (err) {
        throw new InternalServerError("Something went Wrong");
    }
};