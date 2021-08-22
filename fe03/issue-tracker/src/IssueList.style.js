import styled from "styled-components";

const IssueListStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
  max-width: 800px;
  min-height: 300px;
  margin: 40px auto;
  border: 1px dashed #bbb;
  padding: 10px;
  box-sizing: border-box;
  font-size: 1.4rem;
  position: relative;

  .addIssue {
    width: 100%;
    font-size: 1.6rem;
    line-height: 3rem;
    text-align: center;
    margin: 10px 0 15px 0;
    color: #555;
    cursor: pointer;
    :hover {
      color: #4f57af;
      background-color: #eee;
    }
  }
`;

export default IssueListStyled;
