import express from "express";
import { pingHandler } from "../../controllers/ping.controllers";
import validtorRequestBody from "../../validator";
import pingSchema from "../../validator/ping.validator";

const pingRouter=express.Router();
pingRouter.get("/:id/comments",validtorRequestBody(pingSchema),pingHandler);
export default pingRouter;