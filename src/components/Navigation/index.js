import React from "react";

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
        </div>
    )
};

export default Navigation;