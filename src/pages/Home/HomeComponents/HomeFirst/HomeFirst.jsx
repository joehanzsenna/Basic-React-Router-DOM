import React from "react";
import './HomeFirst.css'
import { Link, Outlet } from "react-router-dom";

const HomeFirst = () => {
  return (
    <div className="HFcontainer">
      <h1>The home page first section</h1>
      <div className="HFcontainer-inner">
        <div className="HFcontainer-inner-links">
          <Link to={"/firstnest"}>First Button</Link>
          <Link to={"/secondnest"}>Second Button</Link>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default HomeFirst;
