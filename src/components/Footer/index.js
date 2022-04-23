import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <p className="footer-copyright">Copyright 2022</p>
            <ul className="footer-list">
                <li className="footer-links">
                    <span><i className="fa-brands fa-github"></i></span>
                    <a href="https://github.com/lindseymiller2567" target="_blank" rel="noreferrer">GitHub</a>
                </li>
                <li className="footer-links">
                    <span><i className="fa-brands fa-linkedin"></i></span>
                    <a href="https://www.linkedin.com/in/lindseydubnicka/" target="_blank" rel="noreferrer">LinkedIn</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;