import express, { Express } from "express";
import cors from "cors";
import dbSettingsController from "@/db_module/controler/db_settings_controller";
import transcribationController from "@/whisper_module/controller/transcribation_controller";

(async (): Promise<void> => {
    const PORT = "4000";
    const app: Express = express();

    const corsOptions = {
        origin: "http://localhost:5173",
        methods: ["POST"],
        credentials: true,
    };

    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(dbSettingsController);
    app.use(transcribationController);

    app.listen(PORT, (): void =>
        console.log(`Server Connected to http://localhost:${PORT}`),
    );
})();
