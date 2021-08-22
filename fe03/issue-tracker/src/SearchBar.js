import React from "react";
import SearchBarStyled from "./SearchBar.styles";

const SearchBar = ({ input, handleChange, handleClick }) => {
  return (
    <SearchBarStyled>
      <input
        type="text"
        placeholder="저장소 이름을 입력하세요. "
        onChange={handleChange}
        value={input}
      ></input>
      <button type="button" onClick={handleClick}>
        검색
      </button>
    </SearchBarStyled>
  );
};

export default SearchBar;
