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
            <section>
                <h3 key={project.title}>{project.title}</h3>
                <p key={project.repo}>{project.repo}</p>
                <p key={project.deployed}>{project.deployed}</p>
                <img src={require(`../../assets/images/${project.title}-screenshot.jpg`)} alt="web app screenshot" width="400" key={`${project.title}-screenshot`}></img>
            </section>
        ))
    )
}

export default Project;