import React from "react";
import { Link } from "react-router-dom";

// export const Menu = () => {
//     return (
//         <nav>
//             <Link to="/about">About</Link>&nbsp;|&nbsp;
//             <Link to="/article">Article</Link>&nbsp;|&nbsp;
//             <Link to="/articles">Articles</Link>&nbsp;|&nbsp;
//             <Link to="/">Home</Link>
//         </nav> 
//     )
// }



function Menu() {
    return (
        <nav>
            <Link to="/about">About</Link>
            <Link to="/article">Article</Link>
            <Link to="/articles">Articles</Link>
            <Link to="/">Home</Link>
        </nav> 
    )
}
export default Menu;
