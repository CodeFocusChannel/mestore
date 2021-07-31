import React, { useContext } from "react";
import UiContext from "../../../store/ui-context";

import classes from "./CustomersList.module.scss";

import BrooklynJPG from "./../../../assets/BrooklynJPG.jpg";
import JacobJPG from "./../../../assets/JacobJPG.jpg";
import LeslieJPG from "./../../../assets/LeslieJPG.jpg";
import TheresaJPG from "./../../../assets/TheresaJPG.jpg";
import AlbertJPG from "./../../../assets/AlbertJPG.jpg";

const customersData = [
    {
        id: 1,
        customerName: "Brooklyn Simmons",
        email: "brooklyn.s@gmail.com",
        img: BrooklynJPG,
    },
    { id: 2, customerName: "Jacob Jones", email: "jacob.j@gmail.com", img: JacobJPG },
    { id: 3, customerName: "Leslie Alexander", email: "leslie.a@gmail.com", img: LeslieJPG },
    { id: 4, customerName: "Theresa Webb", email: "theresa.w@gmail.com", img: TheresaJPG },
    { id: 5, customerName: "Albert Flores", email: "albert.f@gmail.com", img: AlbertJPG },
];

const CustomersList = () => {
    const uiCtx = useContext(UiContext);
    const themeClass = uiCtx.theme === "light" ? classes.light__mode : classes.dark__mode;
    return (
        <div className={`${classes.customerslist} ${themeClass}`}>
            <div className={classes.customerslist__header}>
                <h2 className={`${classes.customerslist__header__title} ${themeClass}`}>
                    Customers List
                </h2>
            </div>
            <div className={classes.list}>
                {customersData.map(({ id, customerName, email, img }) => (
                    <div className={classes.list__item} key={id}>
                        <div className={classes.list__item__img}>
                            <img
                                src={img}
                                alt={`${customerName} head shot`}
                                className={classes.img}
                            />
                        </div>
                        <div className={classes.list__item__info}>
                            <span className={`${classes.name} ${themeClass}`}>{customerName}</span>
                            <span className={`${classes.email} ${themeClass}`}>{email}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomersList;
