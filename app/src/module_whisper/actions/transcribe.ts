import * as path from "node:path";
import { ChildProcessWithoutNullStreams, spawn } from "child_process";
import { TranscriptionResult } from "@/module_whisper/types/whisper_module_types";

const whisperTranscribe = () => {
    return async (audioPath: string): Promise<TranscriptionResult> => {
        try {
            const transcription = await new Promise((resolve, reject) => {
                const whisper: ChildProcessWithoutNullStreams = spawn(
                    "python3",
                    [
                        path.join(__dirname, "../../../whisper/whisper_entry_point.py"),
                        audioPath,
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

            return JSON.parse(transcription as string) as TranscriptionResult;
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
