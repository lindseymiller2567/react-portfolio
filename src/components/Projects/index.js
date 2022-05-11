import React, { useState } from "react";
import Modal from "../Modal";

function Project() {

    const [projects] = useState([
        {
            title: 'Bookworm',
            repo: 'https://github.com/Hmlessard/Bookworm',
            deployed: 'https://asgardians-bookworm.herokuapp.com/',
            techStack: "Node.js, Express.js, MySQL, Sequelize, Handlebars.js, Bcrypt, Third Party API, JavaScript, Bootstrap Library",
            bio: "Blog-style web application for booklover's to come together to share thoughts and discuss their favorite books.",
        },
        {
            title: 'Dinner Planner',
            repo: 'https://github.com/MattKolbach/DinnerPlanner',
            deployed: 'https://mattkolbach.github.io/DinnerPlanner/',
            techStack: "HTML, Pure CSS Library, JavaScript, Third Party API's",
            bio: "Client-side web application that lets users search through dinner and drink recipes to help them prepare the perfect spread for an upcoming dinner party.",
        },
        {
            title: 'Tech Blog',
            repo: 'https://github.com/lindseymiller2567/tech-blog-mvc',
            deployed: 'https://thawing-sierra-85739.herokuapp.com',
            techStack: "Node.js, Express.js, MySQL, Sequelize, Handlebars.js, Bcrypt, JavaScript, CSS",
            bio: "CMS-style blog site that follows the MVC paradigm. Users can login to their account, create blog posts, and leave comments on other posts",
        },
        {
            title: 'Weather Dashboard',
            repo: 'https://github.com/lindseymiller2567/weather-dashboard',
            deployed: 'https://lindseymiller2567.github.io/weather-dashboard',
            techStack: "HTML, CSS, JavaScript, Open Weather API",
            bio: "Weather app that uses a third party API to retrieve weather updates for cities. Uses local storage to save search history.",
        },
        {
            title: 'Deep Thoughts',
            repo: 'https://github.com/lindseymiller2567/deep-thoughts',
            deployed: 'https://immense-dusk-64707.herokuapp.com/',
            techStack: "coming soon",
            bio: "coming soon",
        },
        {
            title: 'Budget Tracker',
            repo: 'https://github.com/lindseymiller2567/budget-tracker-pwa',
            deployed: 'https://dry-fjord-53104.herokuapp.com/',
            techStack: "Service Workers, IndexedDB, MongoDB, Mongoose",
            bio: "PWA app that gives users a fast and easy way to keep track of their money while also having offline functionality. This way users can still enter transactions even when their lose connection to the network.",
        },
        {
            title: 'Propagatorz',
            repo: 'https://github.com/lindseymiller2567/budget-tracker-pwa',
            deployed: 'to come',
            techStack: "React, Node.js, Express.js, MongoDB, Mongoose, GraphQL, Apollo Server, Cloudinary",
            bio: "App that allows users to connect with one another about various ideas or problems they may have with caring for their house plants.",
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
                    onClick={() => toggleModal(project, i)}
                    className="card-image">
                </img>
            </div>
        ))
    )
}

export default Project;