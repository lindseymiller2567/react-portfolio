import React, { useState } from "react";

function Project() {

    const [projects] = useState([
        {
            title: 'Bookworm',
            repo: 'github link here',
            deployed: 'deployed link here',
        },
        {
            title: 'Dinner Planner',
            repo: 'github link here',
            deployed: 'deployed link here',
        },
        {
            title: 'Tech Blog',
            repo: 'github link here',
            deployed: 'deployed link here',
        },
        {
            title: 'Weather Dashboard',
            repo: 'github link here',
            deployed: 'deployed link here',
        }
    ])

    return (
        projects.map((project) => (
            <section key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.repo}</p>
                <p>{project.deployed}</p>
                <img src={require(`../../assets/images/${project.title}-screenshot.jpg`)} alt="web app screenshot" width="400"></img>
            </section>
        ))
    )
}

export default Project;