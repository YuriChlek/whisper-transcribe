import fs from "node:fs/promises";
import { OUTPUT_FILE_PATH, TABLE_NAME } from "@/constants/constants";
import db_query_handler from "@/module_db/actions/handlers/db_query_handler";
import convert_audio from "@/module_whisper/actions/convert_audio";
import transcribe from "@/module_whisper/actions/transcribe";
import { TableRow } from "@/module_db/types/db_module_types";
import { TranscriptionResult } from "@/module_whisper/types/whisper_module_types";
import { get_start_stop_flag } from "@/utils/start_stop_flag";
import format_path from "@/module_whisper/actions/format_path";

const start_handler: () => Promise<void> = async (): Promise<void> => {
    const updateQuery = `UPDATE ${TABLE_NAME} SET Transcript = ? WHERE ID = ?`;
    const selectQuery: string = `SELECT * FROM ${TABLE_NAME} WHERE Transcript IS NULL
                                        ORDER BY id ASC
                                        LIMIT 1 OFFSET 0;`;

    while (get_start_stop_flag()) {
        const data = (await db_query_handler(selectQuery)) as Array<TableRow>;

        if (data.length === 0) {
            console.log("Немає нових записів. Чекаю...");

            await new Promise((resolve) => setTimeout(resolve, 5000));
            continue;
        }

        const audioPath: string | undefined = data[0].Path;
        const id: number = data[0].ID as number;

        if (audioPath) {
            try {
                const inputFile: string = format_path(audioPath);

                await fs.access(inputFile);
                await convert_audio(inputFile);

                const res = (await transcribe(OUTPUT_FILE_PATH)) as TranscriptionResult;

                if (res && "text" in res) {
                    if (res.text.trim()) {
                        await db_query_handler(updateQuery, [res.text.trim(), id]);
                        console.log(`Файл ${audioPath} успішно транскрибовано.`);
                    }
                    else {
                        await db_query_handler(updateQuery, [
                            `Голос не знайдено.`,
                            id,
                        ]);
                    }
                }
            } catch (err) {
                console.log(`Помилка транскрибації файлу: ${audioPath}`, err);
                await db_query_handler(updateQuery, [
                    `Голос не знайдено.`,
                    id,
                ]);
            }
        } else {
            console.log("Шлях до файлу відсутній в базі даних.");
        }
    }
};

export default start_handler;
