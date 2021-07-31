import React, { useContext } from "react";
import UiContext from "../../../store/ui-context";

import classes from "./ProductSales.module.scss";
import SalesTable from "./SalesTable/SalesTable";

const ProductSales = () => {
    const uiCtx = useContext(UiContext);
    const themeClass = uiCtx.theme === "light" ? classes.light__mode : classes.dark__mode;
    return (
        <div className={`${classes.productsales} ${themeClass}`}>
            <div className={classes.productsales__header}>
                <h2 className={`${classes.productsales__header__title} ${themeClass}`}>
                    Product Sales
                </h2>
            </div>
            <SalesTable />
        </div>
    );
};

export default ProductSales;
