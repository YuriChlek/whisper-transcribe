import path from "node:path";
import * as process from "node:process";

const format_path = (audioPath: string): string => {
    const isRemote: boolean = audioPath.startsWith("http://") || audioPath.startsWith("https://");
    const isSharedFile = audioPath.startsWith("//");
    const localFilesPath = process.env.LOCAL_FILES_URL

    if (process.env.IS_LOCAL_FILES === "true" && localFilesPath) {
        const normalizePath = (filePath: string) => filePath.replace(/\\/g, '/').split('/').filter(Boolean);
        const sourceParts = normalizePath(audioPath);
        const targetParts = normalizePath(localFilesPath);
        const commonIndex = sourceParts.findIndex(part => targetParts.includes(part));

        if (commonIndex === -1) {
            console.log("Введіть коректний шлях до директорії із файлами для транскрибації!")
            return ""
        }

        return path.join(localFilesPath, sourceParts.slice(commonIndex + 1).join(path.sep));
    }

    if (isRemote || isSharedFile) {
        return audioPath;
    }

    return path.resolve(__dirname, audioPath);
}

export default format_path;
