import React, { ReactNode } from "react";
import logoImage from "../assets/DatabaseUI.svg";
import { Link } from "react-router-dom";

interface NavigationProps {
  children: ReactNode[];
}

const Navigation: React.FC<NavigationProps> = ({ children }) => (
  <header className="mb-1">
    <div className="container flex-row">
      <Link to="/">
        <img src={logoImage} alt="logo" />
      </Link>
      <nav>
        <ul className="list__header">
          {children.map((child, index) => (
            <li key={index} className="li__list__header">
              {child}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

export default Navigation;
