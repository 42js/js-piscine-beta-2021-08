import React from "react";

export default function FormChange({ handleChange }) {
  return (
    <form>
      <input type="text" onChange={handleChange}></input>
    </form>
  );
}
