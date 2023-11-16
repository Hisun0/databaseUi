import React, { ReactNode } from "react";
import logoImage from "../assets/DummyUI.svg";

interface NavigationProps {
  children: ReactNode[];
}

const Navigation: React.FC<NavigationProps> = (props) => {
  const { children } = props;

  return (
    <header>
      <div className="container">
        <div className="flex-row">
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
      </div>
    </header>
  );
};

export default Navigation;
