import React from "react";
import ButtonBase from "../ButtonBase/ButtonBase";
import { Id, toast } from "react-toastify";
import fetchData from "../../utils/fetchData";
import { useAppState } from "../../state/state.ts";
import styles from "./transcribation.controllers.module.css";
import { TranscribationStartResponse } from "../../types/frontend_types.ts";
import updateMessage from "../../utils/updateMessage.ts";

const TranscribionControllers: React.FC = () => {
    const { isStarted, setIsStartedValue } = useAppState();

    const update = (response: TranscribationStartResponse, loadingToastId: Id) => {
        const messageType = Object.keys(response).includes("error") ? "error" : "success";

        setIsStartedValue(response.start);
        updateMessage(loadingToastId, messageType, response.message);
    };

    const startTranscribationHandler = () => {
        const loadingToastId: Id = toast.loading("Зачекайте, обробляємо запит...");

        fetchData<TranscribationStartResponse>("/transcribation_start").then(
            (response: TranscribationStartResponse) => {
                update(response, loadingToastId);
            },
        );
    };

    const stopTranscribationHandler = () => {
        const loadingToastId: Id = toast.loading("Зачекайте, обробляємо запит...");

        fetchData<TranscribationStartResponse>("/transcribation_stop").then(
            (response: TranscribationStartResponse) => {
                update(response, loadingToastId);
            },
        );
    };

    return (
        <div className={styles.wrapper}>
            <ButtonBase
                disabled={isStarted}
                handler={startTranscribationHandler}
                type="button"
            >
                Старт
            </ButtonBase>
            <ButtonBase
                disabled={!isStarted}
                handler={stopTranscribationHandler}
                type="button"
            >
                Стоп
            </ButtonBase>
        </div>
    );
};

export default TranscribionControllers;
