import React, { ReactNode } from "react";
import clsx from "clsx";
import styles from "./button.style.module.css";

type ButtonProps = {
    handler: () => void;
    type?: "button" | "submit" | "reset";
    children: ReactNode;
    className?: string;
};

const ButtonBase: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <button
            onClick={props.handler}
            type={props.type}
            className={clsx(styles["form-button"], props.className)}
        >
            {props.children}
        </button>
    );
};

export default ButtonBase;
