import React from 'react';
import PropTypes from 'prop-types';

const PrintOnInput = ({ onChange }) => {
  return (
    <form>
      <input type="text" onChange={onChange} />
    </form>
  );
};

PrintOnInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default PrintOnInput;
