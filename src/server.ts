import express from "express";
import {serverConfig} from "./config"
import v1Router from "./routes/v1";
import errorMiddlewareHandler from "./middleware/error.middleware";
import { logger } from "./config/logger.config";
import { loogerMiddleware } from "./middleware/log.middleware";
const app=express();
app.use(express.json())
app.use(loogerMiddleware);
app.use('/api/v1/',v1Router);
app.use(errorMiddlewareHandler)
app.listen(serverConfig.PORT,()=>{
    logger.info(`Server has been running at port adress ${serverConfig.PORT}`);
})