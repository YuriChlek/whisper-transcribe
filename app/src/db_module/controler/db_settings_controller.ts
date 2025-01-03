import { Router, Request, Response } from "express";
import db_check_connection_handler from "@/db_module/actions/handlers/db_check_connection_handler";
import save_db_connection_config from "@/db_module/actions/save/save_db_connection_config";
import db_get_connection_data from "@/db_module/actions/handlers/db_get_connection_data";
import { DBConnectionData, ResponseType } from "@/db_module/types/db_module_types";

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
            const dbConnectionData: DBConnectionData | ResponseType =
                await db_get_connection_data();

            res.status(200).json({
                success: true,
                data: dbConnectionData,
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
