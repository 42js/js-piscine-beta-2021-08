import React, { Component } from 'react';
import Item from './Item';

class ItemList extends Component {
  render() {
    return (
      <div>
        <Item text="리액트 공부" />
        <Item text="Node.js 공부" />
        <Item text="치킨 먹기" />
      </div>
    );
  }
}

export default ItemList;
