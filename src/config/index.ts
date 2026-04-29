import dotenv from "dotenv";

function loadEnv(){
dotenv.config();
}

loadEnv();
type ServerConfig={
    PORT:number
}

type DataBaseSchema={
    username:String,
    password:String,
    database:String,
    host:String,
}



export const serverConfig:ServerConfig={
PORT:Number(process.env.PORT)||3001
};


export const DbConfig:DataBaseSchema={
    username:process.env.DB_USERNAME || "root",
    password:process.env.DB_PASSWORD || "root",
    database:process.env.DB_NAME || "testdb",
    host:process.env.DB_HOST || "localhost",
};
