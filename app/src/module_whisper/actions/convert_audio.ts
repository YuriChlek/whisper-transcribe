import * as path from "node:path";
import ffmpegPath from "ffmpeg-static";
import ffmpeg from "fluent-ffmpeg";
import { OUTPUT_FILE_PATH } from "@/constants/constants";

const convert_audio_factory = () => {
    if (ffmpegPath) {
        ffmpeg.setFfmpegPath(ffmpegPath);
    } else {
        console.error("FFmpeg path is not defined.");
    }

    return async (audioPath: string) => {
        const inputFile = path.resolve(audioPath);
        const outputFile = path.resolve(OUTPUT_FILE_PATH);

        try {
            ffmpeg(inputFile)
                .audioChannels(1)
                .audioFrequency(16000)
                .audioCodec("pcm_s16le")
                .toFormat("wav")
                .on("end", () => {
                    console.log(`Успішно конвертовано файл: ${audioPath}.`);
                })
                .on("error", (err: any) => {
                    console.error("Помилка при конвертації:", err);
                })
                .save(outputFile);
        } catch (error) {
            console.log("convert_audio", `Не знайдено файл: ${audioPath}`);
            return error;
        }
    };
};

const convert_audio = convert_audio_factory();

export default convert_audio;
