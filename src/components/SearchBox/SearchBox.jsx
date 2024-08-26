import React from "react";
import s from "./SearchBox.module.css";

const SearchBox = ({ searchValue, setSearchValue }) => {
  return (
    <input
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      type="text"
      className={s.input}
      placeholder="Search contacts..."
    />
  );
};

export default SearchBox;
