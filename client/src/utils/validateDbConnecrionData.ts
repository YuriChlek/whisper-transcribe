import { toast } from "react-toastify";
import { SettingsData } from "../types/frontend_types";

const validateDBConnectionData: (data: SettingsData) => boolean = (
    data: SettingsData,
): boolean => {
    console.log("validateDBConnectionData")
    const { host, port, user, database } = data;
    const ipRegex =
        /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$/;

    if (!ipRegex.test(host) && host !== "localhost") {
        toast.error("Введіть коректну IP-адресу.");
        return false;
    }

    const portNumber: number = parseInt(String(port), 10);
    if (isNaN(portNumber) || portNumber < 1 || portNumber > 65535) {
        toast.error("Введіть коректний порт (1-65535).");
        return false;
    }

    if (!user.trim()) {
        toast.error("Введіть ім'я користувача.");
        return false;
    }

    if (!String(database).trim()) {
        toast.error("Введіть назву бази даних.");
        return false;
    }

    return true;
};

export default validateDBConnectionData;
