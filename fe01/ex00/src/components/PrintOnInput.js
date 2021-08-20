import React from 'react';
import PropTypes from 'prop-types';
import './PrintOnInput.css';

const PrintOnInput = ({ text, onChange }) => {
  return (
    <div className="total">
      <form>
        <input
          className="input-box2"
          type="text"
          value={text}
          onChange={onChange}
        />
      </form>
    </div>
  );
};

PrintOnInput.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PrintOnInput;
