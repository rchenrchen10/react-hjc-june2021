import { Link } from "react-router-dom";

export const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/articles">Articles</Link>
            </li>
            {/* <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/articles">Articles</a>
            </li> */}
        </ul>
    </nav>

)