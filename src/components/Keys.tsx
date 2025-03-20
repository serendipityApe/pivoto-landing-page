import React from "react";

type Props = {
  // Define your component props here
  children?: React.ReactNode;
};

const Keys: React.FC<Props> = ({ children }) => {
  // Component logic goes here

  return (
    // JSX markup goes here
    <span className="inline-block rounded dark:bg-shortcut dark:text-text text-center h-5 leading-5 min-w-5 px-1 mx-1">
      {children}
    </span>
  );
};

export default Keys;
