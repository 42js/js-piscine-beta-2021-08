import React from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import SearchBarStyled from "./SearchBar.styles";

const SearchBar = () => {
  return (
    <SearchBarStyled>
      <InputGroup size="sm" className="mb-3">
        <FormControl
          aria-label="Small"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <Button variant="light" size="lg">
        Search
      </Button>
    </SearchBarStyled>
  );
};

export default SearchBar;
