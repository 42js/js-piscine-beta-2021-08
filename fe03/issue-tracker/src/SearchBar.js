import React from "react";
import SearchBarStyled from "./SearchBar.styles";

const SearchBar = () => {
  return (
    <SearchBarStyled>
      <input type="text" placeholder="저장소 이름을 입력하세요. "></input>
      <button type="button">검색</button>
    </SearchBarStyled>
  );
};

export default SearchBar;
