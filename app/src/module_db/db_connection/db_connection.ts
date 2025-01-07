import dotenv from "dotenv";
import mysql from "mysql2";

let dbConnection: mysql.Pool | null = null;

const createDbConnection: () => mysql.Pool = (): mysql.Pool => {
    if (dbConnection) {
        closeDbConnection();
    }

    dbConnection = mysql.createPool({
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        connectionLimit: 10,
    });

    return dbConnection;
};

export const closeDbConnection: () => void = (): void => {
    if (dbConnection) {
        dbConnection.end((err) => {
            if (err) {
                console.log("Error closing database connection:", err);
            } else {
                console.log("Database connection closed.");
            }
        });
        dbConnection = null;
    }
};

export const resetDbConnection = async () => {
    delete process.env.DB_HOST;
    delete process.env.DB_PORT;
    delete process.env.DB_USER;
    delete process.env.DB_PASSWORD;
    delete process.env.DB_DATABASE;

    dotenv.config();

    return createDbConnection();
};

dotenv.config();
createDbConnection();

export const getDbConnection: () => mysql.Pool = (): mysql.Pool =>
    dbConnection as mysql.Pool;
