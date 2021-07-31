import React, { useState } from "react";

import classes from "./ToggleSwitch.module.scss";

const ToggleSwitch = ({ toggle }) => {
    const [switchOn, setSwitchOn] = useState(false);

    const switchToggleHandler = () => {
        setSwitchOn((p) => !p);
        toggle();
    };

    const switchOnClass = switchOn ? classes.on : "";

    return (
        <div className={`${classes.switch} ${switchOnClass}`} onClick={switchToggleHandler}>
            <div className={classes.switch__thumb} />
        </div>
    );
};

export default ToggleSwitch;
