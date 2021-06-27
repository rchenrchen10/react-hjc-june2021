import React from "react";
import { NavLink } from "react-router-dom";

export const Menu = () => {
    return (
        <nav>
            <NavLink to="/about">About</NavLink>&nbsp;|&nbsp;
            <NavLink to="/article">Article</NavLink>&nbsp;|&nbsp;
            <NavLink to="/articles">Articles</NavLink>&nbsp;|&nbsp;
            <NavLink to="/">Home</NavLink>
        </nav> 
    )
}



// function Menu() {
//     return (
//         <nav>
//             <Link to="/about">About</Link>
//             <Link to="/article">Article</Link>
//             <Link to="/articles">Articles</Link>
//             <Link to="/">Home</Link>
//         </nav> 
//     )
// }
// export default Menu;
