import styled from "styled-components";

const SearchBarStyled = styled.div`
  background-color: #eee;
  width: 80vw;
  max-width: 600px;
  padding: 10px;
  margin: 20px auto;
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;

  input {
    color: #555;
    width: calc(73vw - 60px);
    height: 40px;
    box-sizing: border-box;
    margin-right: 15px;
    border: none;
    background-color: #fff;
    padding-left: 10px;
    box-sizing: border-box;
  }

  button {
    width: 60px;
    height: 40px;
    box-sizing: border-box;
    border: none;
    background-color: #8993ff;
    text-align: center;
    color: #fff;
    cursor: pointer;

    :hover {
      background-color: #bbc3ff;
      color: #444;
    }
  }
`;

export default SearchBarStyled;
