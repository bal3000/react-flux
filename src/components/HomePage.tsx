import React from "react";
import { Link } from "react-router-dom";

function HomePage(): JSX.Element {
  return (
    <div className="jumbotron">
      <h1>Pluralsight Administration</h1>
      <p>React, Flux and React Router for ur web apps</p>
      <Link to="about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
}

export default HomePage;
