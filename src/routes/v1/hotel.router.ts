import express from "express";
import { createHotelHandler,getAllHotelsHandler,getHotelHandler, softDeleteHotelHandler } from "../../controllers/hotel.controllers";
import validtorRequestBody from "../../validator";
import { hotelSchema } from "../../validator/hotel.validator";
const hotelRouter=express.Router();

hotelRouter.post('/',validtorRequestBody(hotelSchema),createHotelHandler);

hotelRouter.get('/:id', getHotelHandler);
hotelRouter.get('/',getAllHotelsHandler);
hotelRouter.delete('/:id',softDeleteHotelHandler);

export default hotelRouter;