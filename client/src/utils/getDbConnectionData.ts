import fetchData from "./fetchData";
import type { DBConnectionData } from "../types/frontend_types";

const getDbConnectionData = async (): Promise<DBConnectionData> => {
    try {
        const a = await fetchData<DBConnectionData>("/get_db_connection_data");
        console.log(a);
        return a;
    } catch (error) {
        // Перевіряємо, чи це помилка
        if (error instanceof Error) {
            throw error; // Кидаємо далі, щоб функція не повертала невідповідний тип
        }
        throw new Error("Unexpected error");
    }
};

export default getDbConnectionData;
