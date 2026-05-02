
export interface appError extends Error{
    statusCode:number
}

export class InternalServerError implements appError{
statusCode: number;
name: string;
message:string;
constructor(message:string){
    this.name="Internal Server Error",
    this.message=message,
    this.statusCode=500
}
};

export class BadRequestError implements  appError{
    statusCode:number;
    name:string;
    message: string;
    constructor(message:string){
        this.statusCode=400,
        this.name="Bad Request ",
        this.message=message
    }
};

export class NotFoundError implements appError{
    statusCode: number;
    name: string;
    message: string;
    constructor(message:string){
        this.statusCode=404,
        this.name="Not Found",
        this.message=message
    }
}