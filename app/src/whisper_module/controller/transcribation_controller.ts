import { Router, Request, Response } from "express";
import start_handler from "@/whisper_module/handlers/start_handler";
import {
    set_stop_flag,
    set_start_flag,
} from "@/whisper_module/handlers/start_stop_flag_handler";

const transcribationController = Router();

transcribationController.post(
    "/transcribation_start",
    async (_: Request, res: Response): Promise<void> => {
        set_start_flag();

        try {
            setTimeout(() => start_handler(), 0);

            res.status(200).json({
                start: true,
                success: true,
                message: "Транскрибація файлів успішно запущена.",
            });
        } catch (error) {
            res.status(200).json({
                success: false,
                message: "Не вдалося запустити транскрибацію файлів.",
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
