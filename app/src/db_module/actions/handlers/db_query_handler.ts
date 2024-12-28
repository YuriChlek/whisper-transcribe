import { Pool, QueryResult } from "mysql2";
import { getDbConnection } from "@/db_module/db_connection/db_connection";

const db_query_handler: (
    query: string,
    p?: (string | number)[],
) => Promise<QueryResult> = async (
    query: string,
    params?: any[],
): Promise<QueryResult> => {
    const dbConnection: Pool | null = getDbConnection();

    if (dbConnection) {
        try {
            const [rows] = await dbConnection.promise().query(query, params);
            return rows;
        } catch (err) {
            throw new Error(
                `Помилка запису в базу даних. ${err instanceof Error
                    ? err.message
                    : "Пул з'єднання з базою даних не доступний."}`
            );
        }
    } else {
        throw new Error("Пул з'єднання з базою даних не доступний.");
    }
};

export default db_query_handler;
