import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App";

import UiProvider from "./store/UiProvider";

ReactDOM.render(
    <UiProvider>
        <App />
    </UiProvider>,
    document.getElementById("root")
);
