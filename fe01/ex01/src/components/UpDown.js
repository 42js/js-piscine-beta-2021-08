import React from 'react';
import PropTypes from 'prop-types';

const UpDown = ({ num, onClickUp, onClickDown }) => {
  return (
    <>
      <div>{num}</div>
      <form>
        <button type="button" onClick={onClickUp}>
          👍
        </button>
        <button type="button" onClick={onClickDown}>
          👎
        </button>
      </form>
    </>
  );
};

UpDown.propTypes = {
  num: PropTypes.number.isRequired,
  onClickUp: PropTypes.func.isRequired,
  onClickDown: PropTypes.func.isRequired,
};

export default UpDown;
