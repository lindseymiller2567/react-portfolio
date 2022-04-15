import React, { useState } from "react";
import Navigation from "../Navigation";

function Header() {

    const [categories] = useState([
        { name: "About" },
        { name: "Portfolio" },
        { name: "Contact" },
        { name: "Resume" }
    ]);

    const [currentCategory, setCurrentCategory] = useState(categories[0]);

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