import React from 'react';
import PropTypes from 'prop-types';

const InputNum = ({ onChange, onKeyPress, onClick }) => {
  return (
    <form>
      <input type="number" onChange={onChange} onKeyPress={onKeyPress} />
      <button type="button" onClick={onClick}>
        enter
      </button>
    </form>
  );
};

InputNum.propTypes = {
  onChange: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default InputNum;
