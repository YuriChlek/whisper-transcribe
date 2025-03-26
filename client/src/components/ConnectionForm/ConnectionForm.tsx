import React, { useState, useEffect } from "react";
import { clsx } from "clsx";
import fetchData from "../../utils/fetchData";
import { Id, toast } from "react-toastify";
import validateDBConnectionData from "../../utils/validateDbConnecrionData";
import styles from "./styles.module.css";
import ButtonBase from "../ButtonBase/ButtonBase";
import {
    CheckConnectionResponse,
    SettingsData,
    DbConnectionResponse
} from "../../types/frontend_types";
import { useAppState } from "../../state/state.ts";
import updateMessage from "../../utils/updateMessage.ts";

const ConnectionForm: React.FC = () => {
    const [host, setHost] = useState("");
    const [port, setPort] = useState("");
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [database, setDatabase] = useState("");
    const [isLocalFiles, setIsLocalFiles] = useState(false);
    const [localFilesUrl, setLocalFilesUrl] = useState("");
    const { isStarted, setIsStartedValue } = useAppState();

    const sendFormData: (sendUrl: string) => void = (sendUrl: string): void => {
        const loadingToastId: Id = toast.loading("Зачекайте, обробляємо запит...");

        fetchData<CheckConnectionResponse>(sendUrl, {
            host,
            port,
            user,
            password,
            database,
            isLocalFiles,
            localFilesUrl
        })
            .then((response: CheckConnectionResponse) => {
                if (response.success) {
                    updateMessage(loadingToastId, "success", response.message);
                } else {
                    updateMessage(loadingToastId, "error", response.message);
                }
            })
            .catch((error) => {
                updateMessage(loadingToastId, "error", error.message);
            });
    };

    const checkDbConnection: () => void = (): void => {
        if (validateDBConnectionData({ host, port: Number(port), user, database })) {
            sendFormData("/check_db_connection");
        }
    };

    const saveDbConnection: () => void = (): void => {
        if (validateDBConnectionData({ host, port: Number(port), user, database })) {
            sendFormData("/save_db_connection");
        }
    };

    useEffect(() => {
        fetchData<DbConnectionResponse>("/get_db_connection_data").then(
            (res: DbConnectionResponse) => {
                const data: SettingsData = res.data;

                setHost(data.host);
                setPort(String(data.port));
                setUser(data.user);
                setPassword(data.password || "");
                setDatabase(data.database || "");
                setIsLocalFiles(data.isLocalFiles || false);
                setLocalFilesUrl(data.localFilesUrl || "");

                setIsStartedValue(res.start ?? false);
            }
        );
    }, []);

    return (
        <div className={styles.wrapper}>
            <form className={styles.form}>
                <div className={styles["form-address-wrapper"]}>
                    <label className={
                        clsx(styles["form-label"],
                            styles["form-label-ip"],
                            { [styles["active"]]: host }
                        )}>
                        <input
                            type="text"
                            disabled={isStarted}
                            value={host}
                            onChange={(e) => setHost(e.target.value)}
                            className={styles["form-input-ip"]}
                        />
                        <span className={styles["label-text"]}>IP-адреса</span>
                    </label>
                    <label className={clsx(styles["form-label"],
                        { [styles["active"]]: port }
                    )}>
                        <input
                            type="text"
                            disabled={isStarted}
                            value={port}
                            onChange={(e) => setPort(e.target.value)}
                            className={styles["form-input-port"]}
                        />
                        <span className={styles["label-text"]}>Порт</span>
                    </label>
                </div>
                <label className={clsx(styles["form-label"],
                    { [styles["active"]]: user }
                )}>
                    <input
                        type="text"
                        disabled={isStarted}
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        className={styles["form-input"]}
                    />
                    <span className={styles["label-text"]}>Ім'я користувача</span>
                </label>
                <label className={clsx(styles["form-label"],
                    { [styles["active"]]: password }
                )}>
                    <input
                        type="password"
                        disabled={isStarted}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles["form-input"]}
                    />
                    <span className={styles["label-text"]}>Пароль</span>
                </label>
                <label className={clsx(styles["form-label"],
                    { [styles["active"]]: database }
                )}>
                    <input
                        type="text"
                        disabled={isStarted}
                        value={database}
                        onChange={(e) => setDatabase(e.target.value)}
                        className={styles["form-input"]}
                    />
                    <span className={styles["label-text"]}>Назва бази даних</span>
                </label>
                <div className={styles["files-settings-wrapper"]}>
                    <label className={styles["form-label-checkbox"]}>
                        <input
                            type="checkbox"
                            disabled={isStarted}
                            checked={isLocalFiles}
                            onChange={(e) => setIsLocalFiles(e.target.checked)}
                            className={styles["form-input"]}
                        />
                        <span>Файли на локальній машині.</span>
                    </label>
                    <label className={clsx(styles["form-label"],
                        { [styles["active"]]: database }
                    )}>
                    <input
                        type="text"
                        disabled={isStarted || !isLocalFiles}
                        value={localFilesUrl}
                        onChange={(e) => setLocalFilesUrl(e.target.value)}
                        className={styles["form-input"]}
                    />
                        <span className={styles["label-text"]}>Шлях до папки на локальній машині</span>
                    </label>
                </div>

                <div className={styles["form-button-wrapper"]}>
                    <ButtonBase
                        disabled={isStarted}
                        handler={checkDbConnection}
                        type="button"
                    >
                        Перевірити з'єднання
                    </ButtonBase>
                    <ButtonBase
                        disabled={isStarted}
                        handler={saveDbConnection}
                        type="button"
                    >
                        Зберегти налаштування
                    </ButtonBase>
                </div>
            </form>
        </div>
    );
};

export default ConnectionForm;
