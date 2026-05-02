import { Sequelize } from "sequelize";
import { DbConfig } from "../../config/index";
export const sequalize = new Sequelize({
    database: DbConfig.database,
    username: DbConfig.username,
    password: DbConfig.password,
    host: DbConfig.host,
    dialect: "mysql",
    logging:true
});