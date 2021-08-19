import React, { Component } from 'react';
import Item from './Item';

class ItemList extends Component {
  render() {
    // TODO: 동작 만들기
    // const { itemlist, onToggle, onRemove } = this.props;

    return (
      <div>
    <Item text="안녕"/>
        <Item text="리액트"/>
        <Item text="반가워"/>
      </div>
    );
  }
}

export default ItemList;
