import path from "node:path";

const format_path = (audioPath: string): string => {
    const isRemote: boolean = audioPath.startsWith("http://") || audioPath.startsWith("https://");
    const isSharedFile = audioPath.startsWith("//");

    if (isRemote || isSharedFile) {
        return audioPath;
    }

    return path.resolve(__dirname, audioPath);
}

export default format_path;
