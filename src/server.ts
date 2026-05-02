import express from "express";
import {serverConfig} from "./config"
import v1Router from "./routes/v1";
import errorMiddlewareHandler from "./middleware/error.middleware";
import { logger } from "./config/logger.config";
import { loogerMiddleware } from "./middleware/log.middleware";
import { sequalize } from "./db/models/sequelize";
const app=express();
app.use(express.json())
app.use(loogerMiddleware);
app.use('/api/v1/',v1Router);
app.use(errorMiddlewareHandler)
app.listen(serverConfig.PORT,async()=>{
    logger.info(`Server has been running at port adress ${serverConfig.PORT}`);
   try{
     await sequalize.authenticate();
    logger.info("Database connection has been established successfully");
    // const hotel=await Hotel.create({
    //     name: "Test Hotel",
    //     location: "Test Location",
    //     address: "Test Address",
    //     rating: 4.5,
    //     rating_count: 100
    // });
    // logger.info("Hotel created successfully", hotel.toJSON());
   }catch(err){
    logger.error("Unable to connect to the database",err);
   }

})