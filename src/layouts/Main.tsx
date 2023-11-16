import React, { ReactNode } from "react";

interface NavigationProps {
  children: ReactNode[];
}

const Main: React.FC<NavigationProps> = (props) => {
  const { children } = props;
  return (
    <main>
      <div className="container">{children}</div>
    </main>
  );
};

export default Main;
