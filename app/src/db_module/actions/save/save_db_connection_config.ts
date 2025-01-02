import * as path from "node:path";
import { promises as fs } from "node:fs";
import { DBConnectionData } from "@/db_module/types/db_module_types";
import { resetDbConnection } from "@/db_module/db_connection/db_connection";

const save_db_connection_config: (data: DBConnectionData) => Promise<void> = async (
    data: DBConnectionData,
): Promise<void> => {
    const __app_dir = process.cwd();
    const envPath: string = path.join(__app_dir, "/.env");
    const envData = {
        DB_HOST: data.host,
        DB_PORT: data.port,
        DB_USER: data.user,
        DB_PASSWORD: data.password,
        DB_DATABASE: data.database,
    };

    const envContent: string = Object.entries(envData)
        .map(
            ([key, value]: [string, string | number | undefined]): string =>
                `${key}=${value}`,
        )
        .join("\n");

    try {
        await fs.writeFile(envPath, envContent);
        await resetDbConnection();
        console.log("Конфігурація підключення до бази даних успішно збережена!");
    } catch (err) {
        if (err instanceof Error) {
            console.error(`Помилка запису у файл: ${err.message}`);
        }
    }
};

export default save_db_connection_config;
