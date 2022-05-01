import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <footer>
      <ul className="foot-list">
        <li className="signature">by Agu Ibanez</li>
        <li>
          <a className="gh-link" href="https://github.com/jinitsuga">
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}
