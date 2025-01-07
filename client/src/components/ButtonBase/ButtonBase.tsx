import React, { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import styles from "./button.style.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    handler: () => void;
    children: ReactNode;
    className?: string;
}

const ButtonBase: React.FC<ButtonProps> = (props: ButtonProps) => {
    const { handler, className, children, ...rest } = props;
    return (
        <button
            onClick={handler}
            className={clsx(styles["form-button"], className)}
            {...rest}
        >
            {children}
        </button>
    );
};

export default ButtonBase;
