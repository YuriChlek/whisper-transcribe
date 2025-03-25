import * as path from "node:path";
import ffmpegPath from "ffmpeg-static";
import ffmpeg from "fluent-ffmpeg";
import get_output_audio_path from "@/module_whisper/actions/get_output_audio_path";
import process from "node:process";

const convert_audio_factory = () => {
    const __app_dir = process.cwd();

    if (ffmpegPath) {
        const ffmPegPath: string = process.env.NODE_ENV === "production" ? "/usr/bin/ffmpeg" : ffmpegPath as string;
        ffmpeg.setFfmpegPath(ffmPegPath);
    } else {
        console.error("FFmpeg path is not defined.");
    }

    return async (audioPath: string, model_id: string) => {
        const output_path = get_output_audio_path(model_id)
        const outputFile: string = path.join(__app_dir, output_path);

        try {
            ffmpeg(audioPath)
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
