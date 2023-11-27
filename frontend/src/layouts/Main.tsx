import React, { ReactNode } from "react";

interface NavigationProps {
  children: ReactNode[] | ReactNode;
}

const Main: React.FC<NavigationProps> = ({ children }) => (
  <main className="mb-1">
    <div className="container">{children}</div>
  </main>
);

export default Main;
