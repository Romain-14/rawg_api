import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <h1>Welcome to my custom video game list featured by rawg API</h1>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default Header;
