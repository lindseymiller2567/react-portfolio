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
            deployed: 'https://thawing-sierra-85739.herokuapp.com',
        },
        {
            title: 'Weather Dashboard',
            repo: 'github link here',
            deployed: 'deployed link here',
        }
    ])

    return (
        projects.map((project) => (
            <div className="project-card" key={project.title}>
                <h3>{project.title}</h3>
                <a href={project.repo}>
                    <span><i class="fa-solid fa-angles-right"></i></span>
                    GitHub Repo
                </a>

                <a href={project.deployed}>
                    <span><i class="fa-solid fa-angles-right"></i></span>
                    Deployed App
                </a>
                <img src={require(`../../assets/images/${project.title}-screenshot.jpg`)} alt="web app screenshot" width="400"></img>
            </div>
        ))
    )
}

export default Project;