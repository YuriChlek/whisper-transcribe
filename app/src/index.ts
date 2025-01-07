import express, { Express } from "express";
import cors from "cors";
import dbSettingsController from "@/module_db/controler/db_settings_controller";
import transcribationController from "@/module_whisper/controller/transcribation_controller";
import * as process from "node:process";

(async (): Promise<void> => {
    const PORT = "4000";
    const app: Express = express();
    const productionHosts = [
        "http://localhost",
        "http://whisper.local",
        "https://whisper.local",
    ];
    const devHost = "http://localhost:5173";
    const activeCorsHosts: Array<string> | string =
        process.env.NODE_ENV === "production" ? productionHosts : devHost;

    const corsOptions = {
        origin: activeCorsHosts,
        methods: ["POST"],
        credentials: true,
    };

    if (process.env.NODE_ENV === "production" && process.env.CUSTOM_HOST) {
        productionHosts.push(process.env.CUSTOM_HOST);
    }

    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(dbSettingsController);
    app.use(transcribationController);

    app.listen(PORT, (): void => {
        console.log("Active cors hosts:", activeCorsHosts);
        console.log(`Server Connected to http://localhost:${PORT}`);
    });
})();
