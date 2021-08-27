import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {

  return (
    <div>
      <h2>Menu</h2>
      <div>
        <Link to="/">Content1</Link>
      </div>
      <div>
        <Link to="/1">Content2</Link>
      </div>
      <div>
        <Link to="/2">Content3</Link>
      </div>
    </div>
  );
};

export default Menu