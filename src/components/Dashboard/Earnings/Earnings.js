import React, { useContext } from "react";
import UiContext from "../../../store/ui-context";

import classes from "./Earnings.module.scss";

import ArrowDownSVG from "../../../assets/ArrowDownSVG";
import ChartContainer from "./ChartContainer/ChartContainer";

const Earnings = () => {
    const uiCtx = useContext(UiContext);
    const themeClass = uiCtx.theme === "light" ? classes.light__mode : classes.dark__mode;
    return (
        <div className={`${classes.earnings} ${themeClass}`}>
            <div className={classes.earnings__headline}>
                <h2 className={`${classes.earnings__headline__title} ${themeClass}`}>Earnings</h2>
                <div className={classes.earnings__headline__content}>
                    <div className={classes.legend}>
                        <div className={classes.legend__item}>
                            <div className={classes.green} />
                            <span className={themeClass}>Sales</span>
                        </div>
                        <div className={classes.legend__item}>
                            <div className={classes.orange} />
                            <span className={themeClass}>Profit</span>
                        </div>
                    </div>
                    <div className={`${classes.filter} ${themeClass}`}>
                        <span>Filter</span>
                        <ArrowDownSVG fillColor={uiCtx.theme === "light" ? "#929292" : "#fff"} />
                    </div>
                </div>
            </div>
            <div className={classes.earnings__chart}>
                <ChartContainer />
            </div>
        </div>
    );
};

export default Earnings;
