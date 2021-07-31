import React, { useContext, useState } from "react";
import UiContext from "./../../store/ui-context";

import classes from "./AppBar.module.scss";

import DashboardSVG from "./../../assets/DashboardSVG";
import CustomersSVG from "./../../assets/CustomersSVG";
import EarningsSVG from "./../../assets/EarningsSVG";
import CartSVG from "./../../assets/CartSVG";
import StoreManagementSVG from "./../../assets/StoreManagementSVG";
import SettingsSVG from "./../../assets/SettingsSVG";
import ToggleSwitch from "../../UI/ToggleSwitch";

const initialNavList = [
    {
        id: 0,
        text: "Dashboard",
        isActive: true,
        icon: (fillColor) => <DashboardSVG fillColor={fillColor} />,
    },
    {
        id: 1,
        text: "Customers",
        isActive: false,
        icon: (fillColor) => <CustomersSVG fillColor={fillColor} />,
    },
    {
        id: 2,
        text: "Earnings",
        isActive: false,
        icon: (fillColor) => <EarningsSVG fillColor={fillColor} />,
    },
    {
        id: 3,
        text: "Product Sales",
        isActive: false,
        icon: (fillColor) => <CartSVG fillColor={fillColor} />,
    },
    {
        id: 4,
        text: "Store Management",
        isActive: false,
        icon: (fillColor) => <StoreManagementSVG fillColor={fillColor} />,
    },
    {
        id: 5,
        text: "Settings",
        isActive: false,
        icon: (fillColor) => <SettingsSVG fillColor={fillColor} />,
    },
];

const AppBar = () => {
    const uiCtx = useContext(UiContext);
    const [navList, setNavList] = useState(initialNavList);

    const isActiveHandler = (id) => {
        const arr = [...navList];
        const inxOfActive = arr.find((item) => item.isActive === true).id;
        arr[inxOfActive].isActive = false;
        arr[id].isActive = true;
        setNavList(arr);
    };

    const themeClass = uiCtx.theme === "light" ? classes.light__mode : classes.dark__mode;
    return (
        <div className={`${classes.appbar__container} ${themeClass}`}>
            <div className={classes.appbar}>
                <div className={classes.appbar__logo}>
                    <div className={`${classes.appbar__logo__rect} ${themeClass}`}>M</div>
                    <h1 className={classes.appbar__logo__title}>
                        Me<span className={themeClass}>Store</span>
                    </h1>
                </div>
                <ul className={classes.appbar__menu}>
                    {navList.map(({ id, text, isActive, icon }) => (
                        <li key={id} className={isActive ? classes.isActive : ""}>
                            <a
                                href={`#${text}`}
                                className={classes.link}
                                onClick={() => isActiveHandler(id)}
                            >
                                <div className={classes.link__icon}>
                                    {icon(
                                        isActive
                                            ? "#33c863"
                                            : uiCtx.theme === "light"
                                            ? "#929292"
                                            : "#fff"
                                    )}
                                </div>
                                <span className={`${classes.link__text} ${themeClass}`}>
                                    {text}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
                <div className={`${classes.appbar__divider} ${themeClass}`} />
                <div className={classes.appbar__themetoggler}>
                    <ToggleSwitch toggle={uiCtx.toggleTheme} />
                    <span className={`${classes.toggle__title} ${themeClass}`}>Night Mode</span>
                </div>
            </div>
        </div>
    );
};

export default AppBar;
