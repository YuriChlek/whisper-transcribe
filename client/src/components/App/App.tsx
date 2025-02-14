import React from "react";
import ConnectionForm from "../ConnectionForm/ConnectionForm.tsx";
import styles from "./app.module.css";
import TranscribionControllers from "../TranscribationControllers/TranscribarionControllers";
import AppContextProvider from "../../state/ContextProvider.tsx";
import { ToastContainer } from "react-toastify";

const App: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <h3>Налаштування</h3>
            <AppContextProvider>
                <ConnectionForm />
                <hr />
                <TranscribionControllers />
            </AppContextProvider>
            <ToastContainer
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={true}
                pauseOnHover={true}
            />
        </div>
    );
};

export default App;
