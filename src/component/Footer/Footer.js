import React from "react";

const Footer = () => {
    let thisYear = new Date();
    return (
        <div className="p-5 bg-dark text-light test-center">
            All right reserved <b>Fun Fruits Orchard</b> | &copy;
            {thisYear.getFullYear()}
        </div>
    );
};

export default Footer;
