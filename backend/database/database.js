import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    "OnlyCoffee", 
    "postgres", 
    "ocdatabase", 
    {
        host: "localhost",
        dialect: "postgres",
    }
);