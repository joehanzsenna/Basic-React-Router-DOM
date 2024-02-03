import React from "react";
import './Error.css'
import { Link, useNavigate } from "react-router-dom";

const Error = () => {

    const navigate = useNavigate();
    const goToHomePage = () => {
      navigate("/");
    };
  return (
    <div className="ER-container">
      <h1>This is the error page </h1>
        <button onClick={goToHomePage}>Go back home </button>
    </div>
  );
};

export default Error;
