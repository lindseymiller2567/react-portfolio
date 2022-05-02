import React, { useState } from "react";
import Modal from "../Modal";

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
        },
        {
            title: 'Deep Thoughts',
            repo: 'https://github.com/lindseymiller2567/deep-thoughts',
            deployed: 'https://immense-dusk-64707.herokuapp.com/',
        },
        {
            title: 'Budget Tracker',
            repo: 'https://github.com/lindseymiller2567/budget-tracker-pwa',
            deployed: 'https://dry-fjord-53104.herokuapp.com/',
        }
    ])

    const [currentProject, setCurrentProject] = useState();

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = (project, i) => {
        setCurrentProject({ ...project, index: i });
        setIsOpen(!isOpen);
    }

    return (
        projects.map((project, i) => (
            <div className="project-card" key={project.title}>
                <h3>{project.title}</h3>
                <a href={project.repo} rel="noreferrer" target="_blank">
                    <span><i className="fa-solid fa-angles-right"></i></span>
                    GitHub Repo
                </a>

                <a href={project.deployed} rel="noreferrer" target="_blank">
                    <span><i className="fa-solid fa-angles-right"></i></span>
                    Deployed App
                </a>


                {isOpen && <Modal currentProject={currentProject} onClose={toggleModal} />}

                <img
                    src={require(`../../assets/images/${project.title}-screenshot.jpg`)}
                    alt="web app screenshot"
                    width="400"
                    onClick={() => toggleModal(project, i)}>
                </img>
            </div>
        ))
    )
}

export default Project;