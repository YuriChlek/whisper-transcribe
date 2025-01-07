import React, { ReactNode, useCallback, useState } from "react";
import { AppContext } from "./state.ts";

interface ProviderProps {
    children: ReactNode;
}

const AppContextProvider: React.FC<ProviderProps> = ({ children }) => {
    const [isStarted, setIsStarted] = useState<boolean>(false);

    const setIsStartedValue: (value: boolean) => void = useCallback((value: boolean) => {
        setIsStarted(value);
    }, []);

    return (
        <AppContext.Provider value={{ isStarted, setIsStartedValue }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
