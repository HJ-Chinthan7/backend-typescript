import { AnyZodObject } from "zod/v3";
import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "../utils/app.error";
import { logger } from "../config/logger.config";
const validtorRequestBody=(scheme: AnyZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await scheme.parseAsync(req.body);
            logger.info("Validatin succesful",{requestId:req.headers["X-Request-Id"]});
            next();
        }
        catch (err) {
           throw new BadRequestError("Validation Error")
        }
    }
};

export default validtorRequestBody;