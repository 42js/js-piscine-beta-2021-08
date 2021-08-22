import styled from "styled-components";

const DialogStyled = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  outline: 0;
`;

DialogStyled.Box = styled.div`
  width: 500px;
  height: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 20px;
  box-sizing: border-box;
`;

export default DialogStyled;
