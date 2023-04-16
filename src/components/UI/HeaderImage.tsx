import React from "react";

const HeaderImage = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1629757509637-7c99379d6d26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
      }}
      className="hero absolute h-96 w-full"
    >
      <div className="hero-overlay bg-opacity-50"></div>
    </div>
  );
};

export default HeaderImage;
