import React from "react";

function Resume() {
    return (
        <section>
            <h2>Skills</h2>
            <ul className="skill-list">
                <li><span><i className="fa-solid fa-code fa-2xl"></i></span>HTML</li>
                <li><span><i className="fa-brands fa-css3-alt fa-2xl"></i></span>CSS</li>
                <li><span><i className="fa-brands fa-js-square fa-2xl"></i></span>JavaScript</li>
                <li><span><i className="fa-brands fa-react fa-2xl"></i></span>React</li>
                <li><span><i className="fa-brands fa-node-js fa-2xl"></i></span>Node.js</li>
                <li><span><i className="fa-solid fa-code fa-2xl"></i></span>Express.js</li>
                <li><span><i className="fa-solid fa-code fa-2xl"></i></span>MySQL</li>
                <li><span><i className="fa-solid fa-code fa-2xl"></i></span>NoSQL</li>
                <li><span><i className="fa-solid fa-code fa-2xl"></i></span>MongoDB</li>
            </ul>

            <p className="download">Click <span className="here">here</span> to download full resume!</p>
        </section>
    )
}

export default Resume;