import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import fetchData from "../../utils/fetchData";
import { ToastContainer, toast } from "react-toastify";
import validateDBConnectionData from "../../utils/validateDbConnecrionData";
import styles from "./styles.module.css";
import ButtonBase from "../ButtonBase/ButtonBase";
const DBConnectionForm = () => {
    const [host, setHost] = useState("");
    const [port, setPort] = useState("");
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [database, setDatabase] = useState("");
    const updateMessage = (toastPopup, type, message) => {
        setTimeout(() => {
            toast.update(toastPopup, {
                type: type,
                render: message,
                isLoading: false,
                autoClose: 3000,
            });
        }, 200);
    };
    const sendFormData = (sendUrl) => {
        const loadingToastId = toast.loading("Зачекайте, обробляємо запит...");
        fetchData(sendUrl, { host, port, user, password, database })
            .then((response) => {
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
    const checkDbConnection = () => {
        if (validateDBConnectionData({ host, port: Number(port), user, database })) {
            sendFormData("/check_db_connection");
        }
    };
    const saveDbConnection = () => {
        if (validateDBConnectionData({ host, port: Number(port), user, database })) {
            sendFormData("/save_db_connection");
        }
    };
    useEffect(() => {
        fetchData("/get_db_connection_data").then((res) => {
            const data = res.data;
            setHost(data.host);
            setPort(String(data.port));
            setUser(data.user);
            setPassword(data.password || "");
            setDatabase(data.database || "");
        });
    }, []);
    return _jsxs("div", {
        className: styles.wrapper,
        children: [
            _jsx(ToastContainer, {
                autoClose: 5000,
                hideProgressBar: false,
                newestOnTop: true,
                pauseOnHover: true,
            }),
            _jsxs("form", {
                className: styles.form,
                children: [
                    _jsxs("div", {
                        className: styles["form-address-wrapper"],
                        children: [
                            _jsx("input", {
                                type: "text",
                                placeholder: "IP-\u0430\u0434\u0440\u0435\u0441\u0430",
                                value: host,
                                onChange: (e) => setHost(e.target.value),
                                className: styles["form-input-ip"],
                            }),
                            _jsx("input", {
                                type: "text",
                                placeholder: "\u041F\u043E\u0440\u0442",
                                value: port,
                                onChange: (e) => setPort(e.target.value),
                                className: styles["form-input-port"],
                            }),
                        ],
                    }),
                    _jsx("input", {
                        type: "text",
                        placeholder:
                            "\u0406\u043C'\u044F \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430",
                        value: user,
                        onChange: (e) => setUser(e.target.value),
                        className: styles["form-input"],
                    }),
                    _jsx("input", {
                        type: "password",
                        placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C",
                        value: password,
                        onChange: (e) => setPassword(e.target.value),
                        className: styles["form-input"],
                    }),
                    _jsx("input", {
                        type: "text",
                        placeholder:
                            "\u041D\u0430\u0437\u0432\u0430 \u0431\u0430\u0437\u0438 \u0434\u0430\u043D\u0438\u0445",
                        value: database,
                        onChange: (e) => setDatabase(e.target.value),
                        className: styles["form-input"],
                    }),
                    _jsxs("div", {
                        className: styles["form-button-wrapper"],
                        children: [
                            _jsx(ButtonBase, {
                                handler: checkDbConnection,
                                type: "button",
                                children:
                                    "\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438 \u0437'\u0454\u0434\u043D\u0430\u043D\u043D\u044F",
                            }),
                            _jsx(ButtonBase, {
                                handler: saveDbConnection,
                                type: "button",
                                children:
                                    "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F",
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
export default DBConnectionForm;
