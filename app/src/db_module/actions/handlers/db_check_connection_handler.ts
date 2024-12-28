import mysql, { QueryError } from "mysql2";
import { DBConnectionData } from "@/db_module/types/db_module_types";

const db_check_connection_handler = async (data: DBConnectionData): Promise<void> => {
    const { host, port, user, password, database } = data;
    const connection = mysql.createConnection({
        host,
        port,
        user,
        password,
        database,
    });

    const connectPromise = new Promise<void>((resolve, reject) => {
        connection.connect((err: QueryError | null): void => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });

    return connectPromise.finally(() => connection.end());
};

export default db_check_connection_handler;
