import * as path from "node:path";
import * as os from "node:os";
import { ChildProcessWithoutNullStreams, spawn } from "child_process";
import { TranscriptionResult } from "@/module_whisper/types/whisper_module_types";
import { set_pending_model_data } from "@/module_registration/storage/registration_storage";

const whisperTranscribe = () => {
    const __app_dir: string = process.cwd();
    const platform: NodeJS.Platform = os.platform();
    const command: "python" | "python3" = platform === "win32" ? "python" : "python3"

    return async (audioPath: string, model_id: string, model_file: string, row_id: number): Promise<TranscriptionResult> => {
        const audioFile: string = path.join(__app_dir, audioPath);

        set_pending_model_data(model_id, true);

        try {
            const transcription: string = await new Promise((resolve, reject) => {
                const whisper: ChildProcessWithoutNullStreams = spawn(
                    command,
                    [
                        path.join(__app_dir, `/whisper/models/${model_file}`),
                        audioFile,
                    ],
                    { env: { ...process.env, PYTHONWARNINGS: "ignore" } },
                );

                let transcription = "";

                whisper.stdout.on("data", (data) => {
                    transcription += data.toString();
                });

                whisper.stderr.on("data", (data) => {
                    reject(`Error: ${data.toString()}`);
                });

                whisper.on("close", (code) => {
                    if (code === 0) {
                        resolve(transcription.trim());
                    } else {
                        reject(`Python process exited with code ${code}`);
                    }
                });
            });

            try {
                if (!transcription.trim().startsWith("{")) {
                    throw new Error("Python повернув некоректний JSON: " + transcription);
                }
                const res = JSON.parse(transcription as string) as TranscriptionResult;
                res.row_id = row_id;

                return res;
            } catch (error) {
                console.error("Некоректний JSON:", transcription);
                throw new Error("Received invalid JSON from Python script.");
            }
        } catch (error) {
            console.error("Помилка транскрипції:", error);
            throw new Error(
                error instanceof Error ? error.message : "Помилка транскрипції:",
            );
        }
    };
};

const transcribe: (audioPath: string, model_id: string, model_file: string, row_id: number) => Promise<TranscriptionResult | void> =
    whisperTranscribe();

export default transcribe;
