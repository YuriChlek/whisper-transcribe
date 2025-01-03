import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ButtonBase from "../ButtonBase/ButtonBase";
import styles from "./transcribation.controllers.module.css";
import fetchData from "../../utils/fetchData";
const TranscribionControllers = () => {
    const startTranscribationHandler = () => {
        fetchData("/transcribation_start").then((response) => {
            console.log(response);
        });
    };
    const stopTranscribationHandler = () => {
        fetchData("/transcribation_stop").then((response) => {
            console.log(response);
        });
    };
    return _jsxs("div", {
        className: styles.wrapper,
        children: [
            _jsx(ButtonBase, {
                handler: startTranscribationHandler,
                type: "button",
                children: "\u0421\u0442\u0430\u0440\u0442",
            }),
            _jsx(ButtonBase, {
                handler: stopTranscribationHandler,
                type: "button",
                children: "\u0421\u0442\u043E\u043F",
            }),
        ],
    });
};
export default TranscribionControllers;
