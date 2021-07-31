import { useReducer } from "react";

import UiContext from "./ui-context";

const defaultUiState = {
    theme: "light",
};

const uiReducer = (state, action) => {
    if (action.type === "TOGGLE") {
        let updatedTheme = state.theme === "light" ? "dark" : "light";
        return {
            theme: updatedTheme,
        };
    }
    return defaultUiState;
};

const UiProvider = ({ children }) => {
    const [uiState, dispatchUiAction] = useReducer(uiReducer, defaultUiState);

    const toggleThemeHandler = () => {
        dispatchUiAction({ type: "TOGGLE" });
    };

    const uiContext = {
        theme: uiState.theme,
        toggleTheme: toggleThemeHandler,
    };

    return <UiContext.Provider value={uiContext}>{children}</UiContext.Provider>;
};

export default UiProvider;
