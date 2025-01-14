import fs from "node:fs/promises";
import convert_audio from "@/module_whisper/actions/convert_audio";

const get_file = async () => {
   try {
       //await fs.copyFile("\\\\172.28.62.229\\shared_folder\\test-audio.wav", "./")
       //await fs.copyFile("./audio/output_file.wav", "./")
       //await convert_audio("\\\\172.28.62.229\\shared_folder\\test-audio.wav")
       await convert_audio("./inputAudio/test_audio_2.mp3")
       console.log("Files copied success ")
   } catch (error) {
       console.log(error)
   }
}

export default get_file;
