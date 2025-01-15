import * as path from "node:path";
import ffmpegPath from "ffmpeg-static";
import ffmpeg from "fluent-ffmpeg";
import { OUTPUT_FILE_PATH } from "@/constants/constants";
import format_path from "@/module_whisper/actions/format_path";

const convert_audio_factory = () => {
    if (ffmpegPath) {
        ffmpeg.setFfmpegPath(ffmpegPath);
    } else {
        console.error("FFmpeg path is not defined.");
    }

    return async (audioPath: string) => {
        const inputFile: string = format_path(audioPath);
        const outputFile: string = path.resolve(__dirname ,`../../../${OUTPUT_FILE_PATH}`);

        const audio_path = format_path(audioPath)
        console.log(audio_path);

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
            console.log(`Не знайдено файл: ${audioPath}`);
            return error;
        }
    };
};

const convert_audio = convert_audio_factory();

export default convert_audio;
