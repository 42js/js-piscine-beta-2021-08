import styled from "styled-components";

const CreateFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  padding: 10px 30px 0 30px;
  color: #555;

  h2 {
    text-align: center;
    font-size: 2rem;
  }

  label {
    font-size: 1.6rem;
    margin-bottom: 8px;
  }

  input {
    border: 1px solid grey;
    margin-bottom: 23px;
    padding: 5px;
  }

  textarea {
    font-size: 1.6rem;
    resize: none;
    height: 100px;
    padding: 5px;
    :focus {
      outline: none;
    }
  }

  button {
    margin: 30px auto;
    width: 120px;
    height: 40px;
    background-color: #5f68cc;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    color: #fff;
  }
`;

export default CreateFormStyled;
