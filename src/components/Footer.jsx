import React from "react";

var year = new Date().getFullYear();

function Footer() {
    const year = new Date().getFullYear();
    return (
    <footer>
        <p>Copyright © {year}</p>
    </footer>
    );
}

export default Footer;