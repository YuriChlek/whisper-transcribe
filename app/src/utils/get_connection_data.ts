import dotenv from "dotenv";
import { DBConnectionData } from "@/module_db/types/db_module_types";

const get_connection_data: () => Promise<DBConnectionData> = async () => {
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
};

export default get_connection_data;
