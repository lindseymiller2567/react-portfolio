import React from "react";
import Project from "../Projects";

function Portfolio() {

    return (
        <section className="portfolio-container">
            <h2>Recent Projects</h2>
            <div className="project-container">
                <Project />
            </div>
        </section>
    )
}

export default Portfolio;