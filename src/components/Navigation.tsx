import React, { ReactNode } from "react";
import logoImage from "../assets/DummyUI.svg";

interface NavigationProps {
  children: ReactNode[];
}

const Navigation: React.FC<NavigationProps> = ({ children }) => (
  <header className="mb-1">
    <div className="container flex-row">
      <img src={logoImage} alt="logo" />
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
