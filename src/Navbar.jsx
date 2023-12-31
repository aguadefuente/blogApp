import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                {/* 
                <a href="/">Home</a>
                <a href="/create">Create</a> */}
                <Link to="/">Home</Link>
                <Link to="/create">Create</Link>
                <Link to="/archive">Archive</Link>
            </div>
        </nav>
      );
}
/*sin arrow function sería
function Navbar() {
    return ();
}
*/

export default Navbar;