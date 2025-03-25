import path from "node:path";
import * as process from "node:process";

const format_path = (audioPath: string): string => {
    const isRemote: boolean = audioPath.startsWith("http://") || audioPath.startsWith("https://");
    const isSharedFile = audioPath.startsWith("//");
    const localFilesPath = process.env.LOCAL_FILES_URL;
    const isProduction = process.env.NODE_ENV === "production"

    if (process.env.IS_LOCAL_FILES === "true" && localFilesPath) {
        const normalizePath = (filePath: string) =>
            filePath.replace(/\\/g, '/').split('/').filter(Boolean);

        const sourceParts = normalizePath(audioPath);
        const targetPartsLower = normalizePath(localFilesPath).map(part => part.toLowerCase());
        const sourcePartsLower = sourceParts.map(part => part.toLowerCase());
        const lastTargetPart = targetPartsLower[targetPartsLower.length - 1];
        const commonIndex = sourcePartsLower.lastIndexOf(lastTargetPart);

        if (commonIndex === -1) {
            console.log("Введіть коректний шлях до директорії із файлами для транскрибації!");
            return "";
        }

        const relativePath = sourceParts.slice(commonIndex + 1).join("/");

        if (process.env.NODE_ENV === "production") {
            let dirPath = path.posix.join(localFilesPath.replace(/\\+$/, ""), relativePath);
            dirPath = dirPath.replace(/^([A-Za-z]):/, "$1");
            console.log(dirPath)
            return path.posix.join(process.cwd(), dirPath).replace(/\\/g, "/");
        } else {
            return path.posix.join(localFilesPath, relativePath).replace(/\\/g, "/");
        }
    }

    if (isRemote || isSharedFile) {
        return audioPath;
    }

    return path.resolve(__dirname, audioPath).replace(/\\/g, "/");
};

export default format_path;
