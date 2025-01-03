import React, { useState, useEffect } from "react";
import fetchData from "../../utils/fetchData";
import { Id, toast } from "react-toastify";
import validateDBConnectionData from "../../utils/validateDbConnecrionData";
import styles from "./styles.module.css";
import ButtonBase from "../ButtonBase/ButtonBase";
import {
    CheckConnectionResponse,
    DBConnectionData,
    DbConnectionResponse,
} from "../../types/frontend_types";
import { useAppState } from "../../state/state.ts";
import updateMessage from "../../utils/updateMessage.ts";

const DBConnectionForm: React.FC = () => {
    const [host, setHost] = useState("");
    const [port, setPort] = useState("");
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [database, setDatabase] = useState("");
    const { isStarted, setIsStartedValue } = useAppState();

    const sendFormData: (sendUrl: string) => void = (sendUrl: string): void => {
        const loadingToastId: Id = toast.loading("Зачекайте, обробляємо запит...");

        fetchData<CheckConnectionResponse>(sendUrl, {
            host,
            port,
            user,
            password,
            database,
        })
            .then((response: CheckConnectionResponse) => {
                console.log(response);
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
                const data: DBConnectionData = res.data;
                setHost(data.host);
                setPort(String(data.port));
                setUser(data.user);
                setPassword(data.password || "");
                setDatabase(data.database || "");

                setIsStartedValue(res.start ?? false);
            },
        );
    }, []);

    return (
        <div className={styles.wrapper}>
            <form className={styles.form}>
                <div className={styles["form-address-wrapper"]}>
                    <input
                        type="text"
                        disabled={isStarted}
                        placeholder="IP-адреса"
                        value={host}
                        onChange={(e) => setHost(e.target.value)}
                        className={styles["form-input-ip"]}
                    />
                    <input
                        type="text"
                        disabled={isStarted}
                        placeholder="Порт"
                        value={port}
                        onChange={(e) => setPort(e.target.value)}
                        className={styles["form-input-port"]}
                    />
                </div>
                <input
                    type="text"
                    disabled={isStarted}
                    placeholder="Ім'я користувача"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    className={styles["form-input"]}
                />
                <input
                    type="password"
                    disabled={isStarted}
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles["form-input"]}
                />
                <input
                    type="text"
                    disabled={isStarted}
                    placeholder="Назва бази даних"
                    value={database}
                    onChange={(e) => setDatabase(e.target.value)}
                    className={styles["form-input"]}
                />
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

export default DBConnectionForm;
