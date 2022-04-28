import React from "react";
import photo from "../../assets/images/about-me.jpg"

function About() {
    return (
        <section>
            <h2>Hello!</h2>

            <div className="about-container">

                <p>
                    My name is Lindsey and I am a full stack web developer.
                    Before I got into web development I graduated with a bachelors degree in Graphic Arts.
                    My love of both design and technology brought me to the field of web development.
                    I strive to create beautiful, functional and quality web experiences for both user and developer.
                    <br /> <br />
                    When I am not coding, I enjoy to knitting (anything from intricate sweaters to small trinkets),
                    traveling, cooking, and going for long hikes.
                    <br /> <br />
                    Web development is exciting to me because it brings new challenages everyday. I love being able to
                    combine my skills in design and critical thinking to create attractive and memorable web applications.
                </p>

                <img src={photo} alt="Myself"></img>

            </div>

        </section>
    )
}

export default About;