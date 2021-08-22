import React from "react";
import SearchBarStyled from "./SearchBar.styles";

const SearchBar = () => {
  return (
    <SearchBarStyled>
      <input type="text"></input>
      <button type="button">검색</button>
    </SearchBarStyled>
  );
};

export default SearchBar;
