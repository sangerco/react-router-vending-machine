import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="NavBar">
            <NavLink exact to="/">What to buy?</NavLink>
            <NavLink exact to="/soda">Soda</NavLink>
            <NavLink exact to="/chips">Chips</NavLink>
            <NavLink exact to="/candybar">Candy Bar</NavLink>
        </nav>
    );
}

export default NavBar;