import { createHotelDTO } from "../dto/hotel.dto";
import { createHotel ,getAllHotels,getHotelById, softDeleteHotel} from "../repository/hotel.repository";

export const createHotelService=async(hotelData:createHotelDTO)=>{
const hotel=await createHotel(hotelData);
return hotel;
};

export const getHotelByIdService=async(hotelId:number)=>{
    const hotel=await getHotelById(hotelId);
    return hotel;
};

export const getAllHotelsService=async()=>{
    const hotels=await getAllHotels();
    return hotels;
};

export const softDeleteHotelService=async(hotelId:number)=>{
    const result=await softDeleteHotel(hotelId);
    return result;
};

