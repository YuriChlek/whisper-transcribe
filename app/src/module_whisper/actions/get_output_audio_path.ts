import { OUTPUT_FILE_NAME } from "@/constants/constants";

const get_output_audio_path = (model_id: string) => {
    return `/audio/${model_id}_${OUTPUT_FILE_NAME}`;
}

export default get_output_audio_path;
