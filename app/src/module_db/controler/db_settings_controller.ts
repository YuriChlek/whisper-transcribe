import { Router, Request, Response } from "express";
import db_check_connection_handler from "@/module_db/actions/handlers/db_check_connection_handler";
import save_db_connection_config from "@/module_db/actions/save/save_db_connection_config";
import get_connection_data from "@/utils/get_connection_data";
import { SettingsData, ResponseType } from "@/module_db/types/db_module_types";
import { get_start_stop_flag } from "@/utils/start_stop_flag";

const dbSettingsController = Router();

dbSettingsController.post(
    "/check_db_connection",
    async (req: Request, res: Response): Promise<void> => {
        try {
            await db_check_connection_handler({
                ...req.body,
            });

            res.status(200).json({
                success: true,
                message: "З'єднання із базою даних успішне.",
            });
        } catch (error) {
            res.status(200).json({
                success: false,
                message: "Не вдалося з'єднатися із базою даних",
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    },
);

dbSettingsController.post(
    "/save_db_connection",
    async (req: Request, res: Response): Promise<void> => {
        try {
            await save_db_connection_config({
                ...req.body,
            });

            res.status(200).json({
                success: true,
                message: "Конфігурація підключення до бази даних успішно збережена.",
            });
        } catch (error) {
            res.status(200).json({
                success: false,
                message: "Не вдалося берегти конфігурацію підключення до бази даних",
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    },
);

dbSettingsController.post(
    "/get_db_connection_data",
    async (_: Request, res: Response): Promise<void> => {
        try {
            const settingsData: SettingsData | ResponseType =
                await get_connection_data();

            res.status(200).json({
                success: true,
                data: settingsData,
                start: get_start_stop_flag(),
            });
        } catch (error) {
            res.status(200).json({
                success: false,
                message: "Не вдалося отримати конфігурацію підключення до бази даних",
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    },
);

export default dbSettingsController;
