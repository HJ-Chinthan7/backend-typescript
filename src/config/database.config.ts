import { DbConfig } from ".";
export const dbConfig={
  development:{
    username:DbConfig.username,
    password:DbConfig.password,
    database:DbConfig.database,
    host:DbConfig.host,
    dialect:"mysql"
  }
}