import * as path from "node:path";
import * as os from "node:os";
import { ChildProcessWithoutNullStreams, spawn } from "child_process";
import { TranscriptionResult } from "@/module_whisper/types/whisper_module_types";
import { OUTPUT_FILE_PATH } from "@/constants/constants";

const whisperTranscribe = () => {
    const __app_dir = process.cwd();
    const platform = os.platform();
    const command = platform === "win32" ? "python" : "python3"

    return async (audioPath: string): Promise<TranscriptionResult> => {
        const audioFile: string = path.join(__app_dir, audioPath);

        try {
            const transcription = await new Promise((resolve, reject) => {
                const whisper: ChildProcessWithoutNullStreams = spawn(
                    command,
                    [
                        path.join(__app_dir, "/whisper/whisper_entry_point.py"),
                        `../app${OUTPUT_FILE_PATH}`,
                    ],
                    { env: { ...process.env, PYTHONWARNINGS: "ignore" } },
                );

                let transcription = "";

                whisper.stdout.on("data", (data) => {
                    transcription = data.toString();
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
                return JSON.parse(transcription as string) as TranscriptionResult;
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

const transcribe: (audioPath: string) => Promise<TranscriptionResult | void> =
    whisperTranscribe();

export default transcribe;
