import mysql, { Connection } from "mysql2";

const create_simple_connection = (
    host: string,
    port: number,
    user: string,
    password: string,
    database: string | undefined,
) => {
    return mysql.createConnection({
        host,
        port,
        user,
        password,
        database,
    });
};

export default create_simple_connection;
