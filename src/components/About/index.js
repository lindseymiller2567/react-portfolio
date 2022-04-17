import React from "react";
import photo from "../../assets/images/about-me-placeholder.jpeg"

function About() {
    return (
        <section>
            <h2>About Me</h2>

            <div className="about-container">

                <img src={photo} alt="Myself" width="200"></img>

                <p>
                Hello! My name is Lindsey and I am a full stack web developer.
                Before I got into web development I graduated with a bachelors degree in Graphic Arts.
                My love of both design and technical-know-how brought me to the field of web development.
                I strive to create beautiful, functional and quality web experiences for both user and developer.
                <br /> <br />
                When I am not coding, I enjoy to knitting and going for long hikes. 
                </p>

            </div>

        </section>
    )
}

export default About;