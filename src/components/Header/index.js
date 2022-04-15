import React, { useState } from "react";
import Navigation from "../Navigation";
import About from "../About"

function Header() {

    const [categories] = useState([
        { name: "About" },
        { name: "Portfolio" },
        { name: "Contact" },
        { name: "Resume" }
    ]);

    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    console.log(currentCategory)

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
            <main>
                {currentCategory.name==='About' && <About />}
                {currentCategory.name==='Portfolio' && <div>Portfolio</div>}
                {currentCategory.name==='Contact' && <div>Contact</div>}
                {currentCategory.name==='Resume' && <div>Resume</div>}
            </main>
        </div>
    );
}

export default Header;