import React, { useState, useEffect } from "react";
import fetchData from "../../utils/fetchData";
import { Id, ToastContainer, toast } from "react-toastify";
import validateDBConnectionData from "../../utils/validateDbConnecrionData";
import styles from "./styles.module.css";
import ButtonBase from "../ButtonBase/ButtonBase";

const DBConnectionForm: React.FC = () => {
    const [host, setHost] = useState("");
    const [port, setPort] = useState("");
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [database, setDatabase] = useState("");

    const updateMessage = (
        toastPopup: Id,
        type: "info" | "success" | "warning" | "error" | "default",
        message: string,
    ) => {
        setTimeout(() => {
            toast.update(toastPopup, {
                type: type,
                render: message,
                isLoading: false,
                autoClose: 3000,
            });
        }, 200);
    };

    const sendFormData: (sendUrl: string) => void = (sendUrl: string): void => {
        const loadingToastId: Id = toast.loading("Зачекайте, обробляємо запит...");

        fetchData(sendUrl, { host, port, user, password, database })
            .then((response) => {
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
        fetchData("/get_db_connection_data").then((res) => {
            const data = res.data;
            setHost(data.host);
            setPort(data.port);
            setUser(data.user);
            setPassword(data.password);
            setDatabase(data.database);
        });
    }, []);

    return (
        <div className={styles.wrapper}>
            <ToastContainer
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={true}
                pauseOnHover={true}
            />
            <form className={styles.form}>
                <div className={styles["form-address-wrapper"]}>
                    <input
                        type="text"
                        placeholder="IP-адреса"
                        value={host}
                        onChange={(e) => setHost(e.target.value)}
                        className={styles["form-input-ip"]}
                    />
                    <input
                        type="text"
                        placeholder="Порт"
                        value={port}
                        onChange={(e) => setPort(e.target.value)}
                        className={styles["form-input-port"]}
                    />
                </div>
                <input
                    type="text"
                    placeholder="Ім'я користувача"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    className={styles["form-input"]}
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles["form-input"]}
                />
                <input
                    type="text"
                    placeholder="Назва бази даних"
                    value={database}
                    onChange={(e) => setDatabase(e.target.value)}
                    className={styles["form-input"]}
                />
                <div className={styles["form-button-wrapper"]}>
                    <ButtonBase handler={checkDbConnection} type="button">
                        Перевірити з'єднання
                    </ButtonBase>
                    <ButtonBase handler={saveDbConnection} type="button">
                        Зберегти налаштування
                    </ButtonBase>
                </div>
            </form>
        </div>
    );
};

export default DBConnectionForm;
