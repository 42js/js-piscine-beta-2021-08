import React from 'react';
import PropTypes from 'prop-types';
import './PrintOnInput.css';

const PrintOnInput = ({ onChange }) => {
  return (
    <div className="total">
      <form>
        <input className="input-box2" type="text" onChange={onChange} />
      </form>
    </div>
  );
};

PrintOnInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default PrintOnInput;
