import * as path from "node:path";
import { promises as fs } from "node:fs";
import { SettingsData } from "@/module_db/types/db_module_types";
import { resetDbConnection } from "@/module_db/db_connection/db_connection";

const save_db_connection_config: (data: SettingsData) => Promise<void> = async (
    data: SettingsData,
): Promise<void> => {
    const __app_dir = process.cwd();
    const envPath: string = path.join(__app_dir, "/.env");
    const envData = {
        DB_HOST: data.host,
        DB_PORT: data.port,
        DB_USER: data.user,
        DB_PASSWORD: data.password,
        DB_DATABASE: data.database,
        IS_LOCAL_FILES: data.isLocalFiles,
        LOCAL_FILES_URL: data.localFilesUrl
    };

    const envContent: string = Object.entries(envData)
        .map(
            ([key, value]: [string, string | number | undefined | boolean]): string =>
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

//trinity/rec/Archive/2303(S)/2025/02/08/2025-02-08_13-04-27_147.6875_Dolsk.wav
// D:\Games\rec\Archive\2303(S)\2025\02\08\2025-02-08_13-04-27_147.6875_Dolsk.wav