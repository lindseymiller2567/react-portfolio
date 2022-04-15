import React from "react";
import Navigation from "../Navigation";

function Header(props) {

    // destructuring props
    const {
        categories,
        setCurrentCategory,
        currentCategory
    } = props

    // console.log(currentCategory)

    return (
        <div>
            <header>
                <h1>Lindsey Dubnicka</h1>
            </header>
            <Navigation
                categories={categories}
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory}
            />
        </div>
    );
}

export default Header;

// array of categories
// current category - About
// set current category which is a function 