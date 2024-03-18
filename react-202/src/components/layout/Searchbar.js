import React from "react";
import logo from "../../img/search-normal.svg";

const SearchBar = ({ placeholder, width }) => {
  return (
    <div className="relative width-100-p">
      <img src={logo} alt="search-icon" className="absolute" />
      <input type="text" placeholder={placeholder} className="width-90-p p-8 pl-25" />
    </div>
  );
};

export default SearchBar;
