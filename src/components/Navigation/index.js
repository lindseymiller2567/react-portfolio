import React from "react";
import About from "../About";
import Portfolio from "../Portfolio";
import ContactForm from "../Contact";

function Navigation(props) {

    // destructuring props
    const {
        categories,
        setCurrentCategory,
        currentCategory
    } = props

    // console.log(currentCategory)

    return (
        <div>
            <nav>
                <ul className="nav-list">
                    {categories.map((category) => (
                        <li className={`nav-links ${currentCategory.name === category.name && 'navActive'}`} key={category.name}>
                            <span
                                onClick={() => setCurrentCategory(category)}
                            >
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
            <main>
                {currentCategory.name === 'About' && <About />}
                {currentCategory.name === 'Portfolio' && <Portfolio />}
                {currentCategory.name === 'Contact' && <div><ContactForm /></div>}
                {currentCategory.name === 'Resume' && <div>Resume</div>}
            </main>
        </div>
    )
};

export default Navigation;