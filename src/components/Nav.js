import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="main-nav">
      <div className="nav-logo">
        <h2 className="logo">
          Memes <span className="text4">4</span>days
        </h2>
      </div>

      <ul className="nav-list">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Browse for memes</li>
        </Link>
        <Link to="/cart">
          <li> Cart</li>
        </Link>
      </ul>
    </nav>
  );
}
