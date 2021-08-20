import React from 'react';
import Button from 'react-bootstrap/Button';
function SidebarItem({ menu }) {
  return (
    <div className="sidebar-item">
      <Button className='alert'>{menu.name}</Button>
    </div>
  );
}

export default SidebarItem;