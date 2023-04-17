import React from "react";

const IconButton = ({ children, className, ...rest }) => {
  return (
    <button
      {...rest}
      className={
        "w-12 h-12 bg-primary/50 rounded-full flex items-center justify-center " +
        className
      }
    >
      {children}
    </button>
  );
};

export default IconButton;
