import React from "react";

function SearchForm({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form className="form-inline" role="form">
      <div className="form-group mx-sm-3 mb-2">
        <label htmlFor="Title" className="sr-only"></label>
        <input
          className="form-control heading-subtitle"
          id="Title"
          type="text"
          placeholder="Book"
          name="q"
          onChange={handleInputChange}
          size="55"
          required
        />
      </div>
      <button
        onClick={handleFormSubmit}
        type="submit"
        className="btn btn-lg search-button heading-subtitle"
      >
        SEARCH
      </button>
    </form>
  );
}

export default SearchForm;
