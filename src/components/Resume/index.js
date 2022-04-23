import React from "react";
import resume from "../../assets/resume/Lindsey_Dubnicka_resume_v2.pdf"

function Resume() {
    return (
        <section>
            {/*<h2>Technical Skills</h2>*/}

            <h3 className="sub-title">Languages</h3>
            <ul className="skill-list">
                <li><span><i className="fa-solid fa-code fa-2xl"></i></span>HTML</li>
                <li><span><i className="fa-brands fa-css3-alt fa-2xl"></i></span>CSS</li>
                <li><span><i className="fa-brands fa-js-square fa-2xl"></i></span>JavaScript</li>
            </ul>

            <h3 className="sub-title">Frameworks + Libraries</h3>
            <ul className="skill-list">
                <li><span><i className="fa-brands fa-react fa-2xl"></i></span>React</li>
                <li><span><i class="fa-brands fa-bootstrap fa-2xl"></i></span>Bootstrap</li>
                <li><span><i className="fa-solid fa-code fa-2xl"></i></span>Express.js</li>
                <li><span><i className="fa-solid fa-code fa-2xl"></i></span>Mongoose</li>
                <li><span><i className="fa-solid fa-code fa-2xl"></i></span>Sequelize</li>
            </ul>

            <h3 className="sub-title">Other</h3>
            <ul className="skill-list">
                <li><span><i className="fa-solid fa-code fa-2xl"></i></span>Restful APIs</li>
                <li><span><i className="fa-brands fa-node-js fa-2xl"></i></span>Node.js</li>
                <li><span><i className="fa-solid fa-code fa-2xl"></i></span>MySQL</li>
                <li><span><i className="fa-solid fa-code fa-2xl"></i></span>MongoDB</li>
                <li><span><i class="fa-brands fa-github-square fa-2xl"></i></span>GitHub</li>
                <li><span><i class="fa-solid fa-camera fa-2xl"></i></span>Adobe Photoshop</li>
                <li><span><i className="fa-solid fa-code fa-2xl"></i></span>Adobe Illustrator</li>
            </ul>

            <p className="download"><span><i class="fa-solid fa-arrow-right-long fa-xl"></i></span>Click <a href={resume} download className="here">here</a> to download my full resume!</p>

        </section>
    )
}

export default Resume;