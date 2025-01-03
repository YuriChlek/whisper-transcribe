import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
import styles from "./button.style.module.css";
const ButtonBase = (props) => {
    return _jsx("button", {
        onClick: props.handler,
        type: props.type,
        className: clsx(styles["form-button"], props.className),
        children: props.children,
    });
};
export default ButtonBase;
