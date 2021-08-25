import React from 'react';
import Item from './Item';

const ItemList = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <Item text="안녕" checked={true} ></Item>
      <Item text="세상"></Item>
    </div>
  );
};

export default ItemList;
