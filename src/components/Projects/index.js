import React, { useState } from "react";

function Project() {

    const [projects] = useState([
        {
            title: 'Bookworm',
            repo: 'https://github.com/Hmlessard/Bookworm',
            deployed: 'https://asgardians-bookworm.herokuapp.com/',
        },
        {
            title: 'Dinner Planner',
            repo: 'https://github.com/MattKolbach/DinnerPlanner',
            deployed: 'https://mattkolbach.github.io/DinnerPlanner/',
        },
        {
            title: 'Tech Blog',
            repo: 'https://github.com/lindseymiller2567/tech-blog-mvc',
            deployed: 'https://thawing-sierra-85739.herokuapp.com',
        },
        {
            title: 'Weather Dashboard',
            repo: 'https://github.com/lindseymiller2567/weather-dashboard',
            deployed: 'https://lindseymiller2567.github.io/weather-dashboard',
        }
    ])

    return (
        projects.map((project) => (
            <div className="project-card" key={project.title}>
                <h3>{project.title}</h3>
                <a href={project.repo} rel="noreferrer" target="_blank">
                    <span><i class="fa-solid fa-angles-right"></i></span>
                    GitHub Repo
                </a>

                <a href={project.deployed} rel="noreferrer" target="_blank">
                    <span><i class="fa-solid fa-angles-right"></i></span>
                    Deployed App
                </a>
                <img src={require(`../../assets/images/${project.title}-screenshot.jpg`)} alt="web app screenshot" width="400"></img>
            </div>
        ))
    )
}

export default Project;