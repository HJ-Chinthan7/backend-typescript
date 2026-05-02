import { Request, Response } from "express"
import { createHotelService,getAllHotelsService,getHotelByIdService, softDeleteHotelService } from "../service/hotel.service";


export const createHotelHandler = async (req: Request, res: Response) => {
    const hotelResponse = await createHotelService(req.body);
    res.status(200).json({
        "message": "Hotel created successfully",
        "data": hotelResponse,
        "success": true
    });
};

export const getHotelHandler=async(req:Request,res:Response)=>{
    const hotelResponse=await getHotelByIdService(Number(req.params.id));
    res.status(200).json({
        "message":"Hotel retrived successfully",
        "data":hotelResponse,
        "success":true
    });
};

export const getAllHotelsHandler=async(req:Request,res:Response)=>{
const hotelsResponse=await getAllHotelsService();
res.status(200).json({
    "message":"Hotels Retrived Successfully",
    "data":hotelsResponse,
    "success":true
})
};

export const softDeleteHotelHandler=async(req:Request,res:Response)=>{
const softDeleteResponse=await softDeleteHotelService(Number(req.params.id));
res.status(200).json({
    "message":"Hotel deleted successfully",
    "success":true,
    "data":softDeleteResponse
})
}
