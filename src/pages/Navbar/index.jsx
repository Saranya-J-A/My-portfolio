import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        <h2 className="navbar-brand">Saranya J A</h2>

        <div className="ms-auto d-flex">
          <NavLink to="/" className="nav-item-custom">Home</NavLink>
          <NavLink to="/about" className="nav-item-custom">About</NavLink>
          <NavLink to="/skills" className="nav-item-custom">Skills</NavLink>
          <NavLink to="/projects" className="nav-item-custom">Projects</NavLink>
          <NavLink to="/contact" className="nav-item-custom">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;