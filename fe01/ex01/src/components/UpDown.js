import React from 'react';
import PropTypes from 'prop-types';
import './UpDown.css';

const UpDown = ({ num, onChange, onClickUp, onClickDown }) => {
  return (
    <div className="input-updown">
      <input
        className="input-box"
        type="number"
        value={num}
        onChange={onChange}
      />
      <button className="button-up" type="button" onClick={onClickUp}>
        👍
      </button>
      <button className="button-down" type="button" onClick={onClickDown}>
        👎
      </button>
    </div>
  );
};

UpDown.propTypes = {
  num: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onClickUp: PropTypes.func.isRequired,
  onClickDown: PropTypes.func.isRequired,
};

export default UpDown;
