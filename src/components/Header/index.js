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

    return (
        <header>
            <h1>Lindsey Dubnicka</h1>
            <Navigation
                categories={categories}
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory}
            />
        </header>
    );
}

export default Header;