import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface PageHeaderProps {
  children: ReactNode;
  buttonText?: string;
  navigatePath?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  children,
  buttonText,
  navigatePath,
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex-row align-center mb-1">
      {children}
      <button
        className="btn btn-primary"
        onClick={() => navigate(navigatePath ?? "/posts")}
      >
        {buttonText ?? "Back to posts"}
      </button>
    </div>
  );
};

export default PageHeader;
