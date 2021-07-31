import React from "react";

const NotificationSVG = ({ fillColor }) => {
    return (
        <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8 20C9.1 20 10 19.1 10 18H6C6 18.5304 6.21071 19.0391 6.58579 19.4142C6.96086 19.7893 7.46957 20 8 20ZM14 14V9C14 5.93 12.36 3.36 9.5 2.68V2C9.5 1.17 8.83 0.5 8 0.5C7.17 0.5 6.5 1.17 6.5 2V2.68C3.63 3.36 2 5.92 2 9V14L0 16V17H16V16L14 14Z"
                fill={fillColor}
            />
        </svg>
    );
};

export default NotificationSVG;
