import React from "react";

const Footer = () => {
    const dateCopyright: number = new Date().getFullYear();
    const footerText: string = `${dateCopyright} © bkuhardware`;
    return (
        <footer className="card-footer text-center text-primary">
            {footerText}
        </footer>
    );
};

export default Footer;