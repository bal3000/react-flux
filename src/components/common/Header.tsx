import React from "react";

function Header(): JSX.Element {
  return (
    <nav>
      <a href="/">Home</a> | <a href="/courses">Courses</a> |{" "}
      <a href="/about">About</a>
    </nav>
  );
}

export default Header;
