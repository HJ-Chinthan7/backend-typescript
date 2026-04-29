require("ts-node/register");
const {dbConfig}=require("./database.config");
const config=dbConfig.development;
module.exports=config;