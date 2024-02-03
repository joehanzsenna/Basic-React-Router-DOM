import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbarSec ">
      <ul className="nav">
        <Link to={"/"}>Home</Link>
        <Link to={"about"}>About</Link>
        <Link to={"contacts"}>Contacts</Link>
      </ul>
    </div>
  );
};

export default Navbar;
