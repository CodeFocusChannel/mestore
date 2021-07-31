import React, { Fragment, useContext } from "react";
import AppBar from "../components/AppBar/AppBar";
import Dashboard from "../components/Dashboard/Dashboard";
import UiContext from "../store/ui-context";

import classes from "./Home.module.scss";

const Home = () => {
    const uiCtx = useContext(UiContext);
    const themeClass = uiCtx.theme === "light" ? classes.light__mode : classes.dark__mode;
    return (
        <Fragment>
            <div className={`${classes.home__container} ${themeClass}`}>
                <div className={classes.home}>
                    <AppBar />
                    <Dashboard />
                </div>
            </div>
        </Fragment>
    );
};

export default Home;
