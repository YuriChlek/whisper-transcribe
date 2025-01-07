import { Connection, QueryError } from "mysql2";

const check_connection = async (connection: Connection) => {
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

export default check_connection;
