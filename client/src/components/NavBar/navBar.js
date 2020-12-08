import React from "react";
import "./navBar.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <a className="navbar-brand" href="/">
        Search
      </a>
      <a className="navbar-brand" href="/">
        Saved
      </a>
    </nav>
  );
}

export default NavBar;
