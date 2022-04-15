import React from "react";

function Navigation(props) {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props


    return (
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
    )
};

export default Navigation;