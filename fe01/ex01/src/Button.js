import React from "react";

export default function Button({ onIncrease, onDecrease }) {
  return (
    <div>
      <button type="button" onClick={onIncrease}>
        +1
      </button>
      <button type="button" onClick={onDecrease}>
        -1
      </button>
    </div>
  );
}
