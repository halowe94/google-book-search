import React from "react";
import "./Container.css";
import SavedBooks from "../SavedBooks/SavedBooks";
import Title from "../Title/Title";
import SearchForm from "../SearchForm/SearchForm";

function Container() {
  return (
    <div className="m-4 container mx-auto">
      <Title />
      <SavedBooks />
      <SearchForm />
      <Booklist />
    </div>
  );
}

export default Container;
