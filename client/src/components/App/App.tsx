import React from "react";
import DBConnectionForm from "../DBConnectionInput/DBConnectionForm";
import styles from "./app.module.css";
import TranscribionControllers from "../TranscribationControllers/TranscribarionControllers";

const App: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <h3>Налаштування підключення до бази даних</h3>
            <DBConnectionForm />
            <hr />
            <TranscribionControllers />
        </div>
    );
};

export default App;
