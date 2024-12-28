import React from "react";
import ButtonBase from "../ButtonBase/ButtonBase";
import styles from "./transcribation.controllers.module.css";
import fetchData from "../../utils/fetchData";

const TranscribionControllers: React.FC = () => {
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

    return (
        <div className={styles.wrapper}>
            <ButtonBase handler={startTranscribationHandler} type="button">
                Старт
            </ButtonBase>
            <ButtonBase handler={stopTranscribationHandler} type="button">
                Стоп
            </ButtonBase>
        </div>
    );
};

export default TranscribionControllers;
