import React from "react";

const BaseForm = ({ onChange, onClick, input }) => {
  return (
    <div>
      <form>
        <input type="text" value={input} onChange={onChange} />
        <input type="button" value="click!" onClick={onClick} />
      </form>
    </div>
  );
};

export default BaseForm;
