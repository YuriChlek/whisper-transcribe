import { Context, createContext, useContext } from "react";

interface State {
    isStarted: boolean;
    setIsStartedValue: (value: boolean) => void;
}

export const AppContext: Context<State | undefined> = createContext<State | undefined>(
    undefined,
);

export const useAppState = (): State => {
    const context: State | undefined = useContext(AppContext);

    if (!context) {
        throw new Error("useGlobalState must be used within an AppContext.Provider");
    }

    return context;
};
