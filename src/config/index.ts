import dotenv from "dotenv";

type ServerConfig={
    PORT:number
}

function loadEnv(){
    console.log("Arrive at loadenv")
dotenv.config();
}

loadEnv();

export const serverConfig:ServerConfig={
PORT:Number(process.env.PORT)||3001
};