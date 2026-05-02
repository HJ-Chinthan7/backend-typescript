import { createHotelDTO } from "../dto/hotel.dto";
import Hotel from "../db/models/hotel";
import { logger } from "../config/logger.config";
import { NotFoundError } from "../utils/app.error";


export const createHotel = async (hotelData: createHotelDTO) => {
    const hotel = await Hotel.create(hotelData);
    logger.info(`Hotel created successfully ${hotel?.id}`);
    return hotel;
};


export const getHotelById=async(hotelId:number)=>{
   try{
     const hotel=await Hotel.findByPk(hotelId);
    logger.info(`Hotel retrived successfully ${hotel?.id}`);
    return hotel;
   }
   catch(err){
    logger.error(`Error retriving hotel with id ${hotelId}`,err);
    throw new NotFoundError("Hotel not found");
 }
};


export const getAllHotels=async()=>{
    const hotels=await Hotel.findAll({
        where:{
            deletedAt:null
        }
    });
    if(!hotels){
        logger.error("No Hotels Found ");
        throw new NotFoundError("No Hotels Found");
    }
    logger.info(`Total hotels retrived ${hotels.length}`);
    return hotels;
};


export const softDeleteHotel=async(hotelId:number)=>{
    const hotel=await Hotel.findByPk(hotelId); 
    if(!hotel){
        logger.error(`Hotel not found for deletion,${hotelId}`);
        throw new NotFoundError(`Hotel not found for deletion ${hotelId}`);
    }
    hotel.deletedAt=new Date();
    await hotel.save();
    logger.info(`Hotel soft deleted successfully ${hotelId}`);
    return true;

};