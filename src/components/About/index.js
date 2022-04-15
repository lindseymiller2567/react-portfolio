import React from "react";
import photo from "../../assets/images/about-me-placeholder.jpeg"

function About() {
    return (
        <section>
            <h2>About Me</h2>

            <div className="about-container">

                <img src={photo} alt="web app screenshot" width="200"></img>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Consectetur adipiscing elit pellentesque habitant. Egestas
                    erat imperdiet sed euismod nisi porta lorem mollis aliquam. In nisl nisi scelerisque eu. Mi
                    eget mauris pharetra et ultrices neque ornare aenean euismod. Mi ipsum faucibus vitae
                    aliquet nec ullamcorper. Nec ultrices dui sapien eget mi. Amet purus gravida quis blandit
                    turpis cursus in hac habitasse. Ut sem nulla pharetra diam sit amet nisl. Ipsum suspendisse
                    ultrices gravida dictum fusce ut placerat orci. Faucibus vitae aliquet nec ullamcorper sit
                    amet risus. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Leo vel orci porta
                    non pulvinar neque laoreet. Elit ullamcorper dignissim cras tincidunt lobortis feugiat.
                    Interdum consectetur libero id faucibus nisl tincidunt eget.
                </p>
            </div>

        </section>
    )
}

export default About;