import React from "react";

const UiContext = React.createContext({
    theme: "light",
    toggleTheme: () => {},
});

export default UiContext;
