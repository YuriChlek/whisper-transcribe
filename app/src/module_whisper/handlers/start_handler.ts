import fs from "node:fs/promises";
import { TABLE_NAME } from "@/constants/constants";
import db_query_handler from "@/module_db/actions/handlers/db_query_handler";
import convert_audio from "@/module_whisper/actions/convert_audio";
import transcribe from "@/module_whisper/actions/transcribe";
import { TableRow } from "@/module_db/types/db_module_types";
import { get_start_stop_flag } from "@/utils/start_stop_flag";
import format_path from "@/module_whisper/actions/format_path";
import { get_free_model_data, set_pending_model_data } from "@/module_registration/storage/registration_storage";
import get_output_audio_path from "@/module_whisper/actions/get_output_audio_path";

let record_row_id: number = 0;

const start_handler: () => Promise<void> = async (): Promise<void> => {
    const updateQuery = `UPDATE ${TABLE_NAME} SET Transcript = ? WHERE ID = ?`;

    while (get_start_stop_flag()) {

        const selectQuery = record_row_id > 0
            ? `SELECT * FROM ${TABLE_NAME} WHERE Transcript IS NULL AND ID > ?
               ORDER BY ID ASC LIMIT 1;`
            : `SELECT * FROM ${TABLE_NAME} WHERE Transcript IS NULL
               ORDER BY ID ASC LIMIT 1;`;

        const data = record_row_id !== null
            ? (await db_query_handler(selectQuery, [record_row_id])) as Array<TableRow>
            : (await db_query_handler(selectQuery)) as Array<TableRow>;

        const modelData = get_free_model_data();
        if (data.length === 0 || !modelData) {
            if (data.length === 0) {
                console.log("Чекаю...");
            }

            await new Promise((resolve) => setTimeout(resolve, 5000));
            continue;
        }

        const audioPath: string | undefined = data[0].Path;
        const id: number = data[0].ID as number;
        record_row_id = id

        if (audioPath) {
            try {
                const inputFile: string = format_path(audioPath);
                const output_file_path = get_output_audio_path(modelData.id)

                console.log(inputFile)
                await fs.access(inputFile);
                await convert_audio(inputFile, modelData.id);

                transcribe(output_file_path, modelData.id, modelData.model_file, id).then((res) => {
                    if (res && "text" in res && "row_id" in res) {
                        if (res.text.trim()) {
                            const model_id = "id" in res ? res.id : ""

                            db_query_handler(updateQuery, [res.text.trim(), res.row_id as number]);
                            console.log(`Файл ${audioPath} успішно транскрибовано.`);

                            get_output_audio_path(modelData.id)
                            set_pending_model_data(model_id, false)
                        }
                        else {
                            db_query_handler(updateQuery, [
                                `Голос не знайдено.`,
                                id,
                            ]);
                        }
                    }
                })
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
