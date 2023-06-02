import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The BiSecura App</h1>
      <div className="links">
        <Link to="/">My Smartlocks</Link>
        <Link to="/create">Add Smartlock</Link>
      </div>
    </nav>
  );
};

export default Navbar;
