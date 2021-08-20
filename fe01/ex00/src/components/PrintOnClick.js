import React from 'react';
import PropTypes from 'prop-types';

const PrintOnClick = ({ onChange, onKeyPress, onClick }) => {
  return (
    <>
      <form>
        <input type="text" onChange={onChange} onKeyPress={onKeyPress} />
      </form>
      <form>
        <button type="button" onClick={onClick}>
          enter
        </button>
      </form>
    </>
  );
};

PrintOnClick.propTypes = {
  onChange: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PrintOnClick;
