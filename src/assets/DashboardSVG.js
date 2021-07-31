import React from "react";

const DashboardSVG = ({ fillColor }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H9C10.1 3 11 3.9 11 5V19C11 20.1 10.1 21 9 21ZM15 21H19C20.1 21 21 20.1 21 19V14C21 12.9 20.1 12 19 12H15C13.9 12 13 12.9 13 14V19C13 20.1 13.9 21 15 21ZM21 8V5C21 3.9 20.1 3 19 3H15C13.9 3 13 3.9 13 5V8C13 9.1 13.9 10 15 10H19C20.1 10 21 9.1 21 8Z"
                fill={fillColor}
            />
        </svg>
    );
};

export default DashboardSVG;
