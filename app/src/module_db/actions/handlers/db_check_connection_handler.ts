import mysql, { Connection, QueryError } from "mysql2";
import { SettingsData } from "@/module_db/types/db_module_types";
import check_connection from "@/utils/check_connection";

const db_check_connection_handler = async (data: SettingsData): Promise<void> => {
    const { host, port, user, password, database } = data;
    const connection: Connection = mysql.createConnection({
        host,
        port,
        user,
        password,
        database,
    });

    return check_connection(connection);
};

export default db_check_connection_handler;
