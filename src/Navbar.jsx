const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">Create</a>
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