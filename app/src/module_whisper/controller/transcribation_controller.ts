import { Router, Request, Response } from "express";
import start_handler from "@/module_whisper/handlers/start_handler";
import { set_stop_flag, set_start_flag } from "@/utils/start_stop_flag";
import get_connection_data from "@/utils/get_connection_data";
import create_simple_connection from "@/utils/create_simple_connection";
import { Connection } from "mysql2";
import check_connection from "@/utils/check_connection";

const transcribationController = Router();

transcribationController.post(
    "/transcribation_start",
    async (_: Request, res: Response): Promise<void> => {
        try {
            const { host, port, user, password, database } = await get_connection_data();
            const connection: Connection = create_simple_connection(
                host,
                port,
                user,
                password,
                database,
            );
            await check_connection(connection);

            set_start_flag();
            setTimeout(() => start_handler(), 0);

            res.status(200).json({
                start: true,
                success: true,
                message: "Транскрибація файлів успішно запущена.",
            });
        } catch (error) {
            res.status(200).json({
                start: false,
                success: false,
                message:
                    "Не вдалося запустити транскрибацію файлів, перевірте налаштування з'єднання із базою даних.",
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    },
);

transcribationController.post(
    "/transcribation_stop",
    async (_: Request, res: Response): Promise<void> => {
        set_stop_flag();

        try {
            res.status(200).json({
                start: false,
                success: true,
                message: "Транскрибація файлів успішно зупинена.",
            });
        } catch (error) {
            res.status(200).json({
                success: false,
                message: "Не вдалося зупинити транскрибацію файлів",
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    },
);

export default transcribationController;
