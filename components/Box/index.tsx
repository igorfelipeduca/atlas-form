import React from "react";

interface BoxInterface extends React.HTMLAttributes<HTMLDivElement> {
  children: JSX.Element;
}

const Box: React.FC<BoxInterface> = ({ children }) => {
  return (
    <div className="bg-[#151515] rounded-lg p-4 h-80 w-80 opacity-40 border border-indigo-600">
      {children}
    </div>
  );
};

export default Box;
