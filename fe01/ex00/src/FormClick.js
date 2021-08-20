import React from "react";

export default function FormChange({ handleChange, handleClick }) {
  return (
    <form>
      <input type="text" onChange={handleChange}></input>
      <button type="button" onClick={handleClick}>
        입력
      </button>
    </form>
  );
}
