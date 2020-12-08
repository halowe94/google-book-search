import React from "react";
import "./Container.css";
import SavedBooks from "../SavedBooks/SavedBooks";
import Title from "../Title/Title";

function Container() {
  return (
    <div className="m-4 container mx-auto">
      <Title />
      <SavedBooks />
    </div>
  );
}

export default Container;
