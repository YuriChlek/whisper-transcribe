import dotenv from "dotenv";
import { ResponseType, DBConnectionData } from "@/db_module/types/db_module_types";

const db_get_connection_data: () => Promise<
    DBConnectionData | ResponseType
> = async () => {
    try {
        delete process.env.DB_HOST;
        delete process.env.DB_PORT;
        delete process.env.DB_USER;
        delete process.env.DB_PASSWORD;
        delete process.env.DB_DATABASE;

        dotenv.config();

        return {
            host: process.env.DB_HOST || "",
            port: Number(process.env.DB_PORT),
            user: process.env.DB_USER || "",
            password: process.env.DB_PASSWORD || "",
            database: process.env.DB_DATABASE || "",
        };
    } catch (error) {
        return {
            message: "Не вдалося отримати дані",
            error,
        } as ResponseType;
    }
};

export default db_get_connection_data;
