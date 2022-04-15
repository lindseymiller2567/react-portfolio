import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <p className="footer-copyright">Copyright 2022</p>
            <ul className="footer-list">
                <li className="footer-links">
                    <span><i className="fa-brands fa-github"></i></span>
                    GitHub
                </li>
                <li className="footer-links">
                    <span><i className="fa-brands fa-linkedin"></i></span>
                    LinkedIn
                </li>
            </ul>
        </footer>
    )
}

export default Footer;