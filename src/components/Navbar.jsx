import { Link, NavLink } from "react-router-dom";

function Navbar() {

  const linkStyle = ({ isActive }) =>
    `text-sm uppercase tracking-wider transition ${
      isActive
        ? "text-blue-400 font-semibold"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav className="navbar sticky top-0 z-50">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        
        {}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide whitespace-nowrap"
        >
          Juniper Farr
        </Link>

        {/* Links */}
        <div className="flex items-center gap-10">
          <NavLink to="/" className={linkStyle}>Home</NavLink>
          <NavLink to="/about" className={linkStyle}>About</NavLink>
          <NavLink to="/projects" className={linkStyle}>Projects</NavLink>
          <NavLink to="/contact" className={linkStyle}>Contact</NavLink>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;